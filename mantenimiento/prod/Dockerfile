FROM debian:latest
LABEL maintainer="evajuagua@alu.edu.gva.es"
RUN apt-get update && apt-get install -y apache2
EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]
