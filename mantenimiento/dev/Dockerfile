FROM debian:latest

LABEL maintainer="evajuagua@alu.edu.gva.es"

RUN apt-get update && apt-get install -y \
    apache2 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]
