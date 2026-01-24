FROM debian:latest

LABEL maintainer="evajuagua@alu.edu.gva.es"

RUN apt-get update && apt-get install -y \
    apache2 \
    php \
    php-yaml \
    php-mysql \
    libapache2-mod-php \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite headers

# Configuración de Apache para permitir .htaccess y logs
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]
