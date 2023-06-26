const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

// DynamoDB에서 사용자 정보를 조회하는 함수
async function getUser(email, password) {
  const params = {
    TableName: 'dynamodb_user',
    Key: {
      email: email,
      password: password,
    },
  };

  const result = await ddb.get(params).promise();
  return result.Item;
}


exports.handler = async (event) => {
  try {
    const email = event.email;
    const password = event.password;

    // DynamoDB에서 사용자 정보를 조회
  const user = await getUser(email, password);


    if (!user) {
      // User not found
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'User not found' }),
      };
    }

    if (user.password === password) {
      // Passwords match, login successful
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ message: 'Login successful' }),
      };
    } else {
      // Passwords do not match, login failed
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Login failed' }),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'Error occurred',
    };
  }
};
