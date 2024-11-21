# 1. 베이스 이미지로 Ubuntu 24.04 사용
FROM ubuntu:24.04

# 2. 필수 패키지 및 Git, Node.js, Yarn 설치
RUN apt-get update && apt-get install -y \
    git \
    curl \
    gnupg \
    lsb-release \
    ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && npm install --global yarn@berry \
    && apt-get clean

# 3. 작업 디렉토리 설정
WORKDIR /app

# 4. 로컬 레포지토리 파일 복사 (현재 경로에서 파일을 가져옴)
COPY . /app

# 5. 환경 변수 설정
ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_APP_ID
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_MEASUREMENT_ID
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_KR_NAME
ARG VITE_GEMINI_API_KEY

ENV VITE_FIREBASE_API_KEY = ${VITE_FIREBASE_API_KEY}
ENV VITE_FIREBASE_APP_ID = ${VITE_FIREBASE_APP_ID}
ENV VITE_FIREBASE_AUTH_DOMAIN = ${VITE_FIREBASE_AUTH_DOMAIN}
ENV VITE_FIREBASE_MEASUREMENT_ID = ${VITE_FIREBASE_MEASUREMENT_ID}
ENV VITE_FIREBASE_MESSAGING_SENDER_ID = ${VITE_FIREBASE_MESSAGING_SENDER_ID}
ENV VITE_FIREBASE_PROJECT_ID = ${VITE_FIREBASE_PROJECT_ID}
ENV VITE_FIREBASE_STORAGE_BUCKET = ${VITE_FIREBASE_STORAGE_BUCKET}
ENV VITE_KR_NAME = ${VITE_KR_NAME}
ENV VITE_GEMINI_API_KEY = ${VITE_GEMINI_API_KEY}

# 5. 애플리케이션 의존성 설치
WORKDIR /app
RUN yarn

# 6. Vite 개발 서버를 실행하기 위해 포트 3000을 열어두기
EXPOSE 5173

# 7. 컨테이너 시작 시 실행할 명령어 설정
CMD ["yarn", "dev", "--host", "--open"]