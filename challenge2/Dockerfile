FROM php:8.1-apache

COPY src/ /var/www/html/

RUN chmod -R 777 /var/www/html/uploads

RUN docker-php-ext-install mysqli
