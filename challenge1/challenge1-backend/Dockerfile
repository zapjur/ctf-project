FROM golang:1.23-alpine

WORKDIR /app

COPY . .

ENV CGO_ENABLED=1

RUN apk add --no-cache gcc musl-dev

RUN go build -o main .

CMD ["./main"]

