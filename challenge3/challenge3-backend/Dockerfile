FROM openjdk:17-jdk-slim

WORKDIR /app

COPY build/libs/challenge3-backend-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]

EXPOSE 8083
