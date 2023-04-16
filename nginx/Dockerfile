# base image 설정
FROM nginx:alpine

# config 파일 컨테이너 디렉토리로 덮어씌우기
COPY ./default.conf /etc/nginx/conf.d/default.conf

# 컨테이너 포트번호 지정
EXPOSE 8080

# 서버 실행
CMD ["nginx", "-g", "daemon off;"]