# devops-04-Final-Team5

# Task Management Tool  기능 요구사항

작업의 진행상황을 체계적으로 관리할 수 있도록 업무를 분배하고 진행상황을 관리할 수 있는 시스템을 구축해야한다.

- 사용자는 개인 정보를 이용해 **회원가입, 로그인, 개인 정보 수정 및 탈퇴**를 할 수 있어야 한다.
- 사용자는 새로운 Task를 생성하고, 생성한 Task를 **수정하거나 삭제, 조회**할 수 있어야 한다.
- 사용자는 Task의 진행 상황을 **대기 중, 진행 중, 완료** 등으로 관리할 수 있어야 한다.
- 사용자는 Task에 **우선순위**를 설정하여, 중요한 Task를 먼저 처리할 수 있도록 할 수 있어야 한다.
- 사용자는 새로운 Task가 추가되거나, 업무 상태가 변경될 때 사용자에게 **알림**을 보낼 수 있어야 한다.
- 주간/월간 업무 진행 상황을 보고하는 기능을 통해 사용자가 자신의 **업무 진행 상황을 확인하고 관리**할 수 있어야 한다.
- 특정 업무를 사용자에게 할당하고, 할당된 업무를 사용자가 확인할 수 있어야 한다.


# 필요한 리소스

- 백엔드 개발:  **JavaScript (Node.js)**
- 데이터베이스 관리:  **Amazon RDS (MySQL)**
- 사용자 인증 및 권한 관리: **JWT(JSON Web Tokens)**
- 알림 시스템: **Amazon SNS, SMS**
- 컨테이너화: **Docker, Kubernetes**
- CI/CD 파이프라인: **GitHub Actions**
- 모니터링: **Prometheus, Grafana, CloudWatch 경보**


# 인프라 요구사항

- 사용되는 애플리케이션들은 컨테이너로 구동되어야합니다.
- 시스템 전반에 가용성, 내결함성, 확장성, 보안성이 고려된 서비스들이 포함되어야 합니다.
- 하나 이상의 컴퓨팅 유닛에 대한 CI/CD 파이프라인이 구성되어야합니다.
- 시스템 메트릭 또는 저장된 데이터에 대한 하나 이상의 시각화된 모니터링 시스템이 구축되어야합니다.
