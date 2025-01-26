FROM gradle:jdk17 AS builder

WORKDIR /app
COPY . .
RUN gradle clean build --no-daemon

FROM openjdk:17-jdk-slim

WORKDIR /app
COPY --from=builder /app/build/libs/challenge3-backend-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
EXPOSE 8083
