FROM openjdk:17-oracle

WORKDIR /app
COPY ./target/spring-boot-docker.jar .

EXPOSE 8080

CMD ["java","-jar","spring-boot-docker.jar"]