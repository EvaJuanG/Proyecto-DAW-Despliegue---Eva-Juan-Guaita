# Proyecto Final DAW - Gestión de Películas

Este proyecto consiste en una aplicación web de gestión de películas desarrollada con una arquitectura de Microservicios utilizando **Docker Compose**.

## Estructura del Proyecto

*   `backend/`: Contiene la API desarrollada en PHP y la base de datos MySQL.
*   `frontend/`: Interfaz de usuario estática servida con Apache.
*   `mantenimiento/`: Página de cortesía para cuando el servicio no está disponible.
*   `sql/`: Scripts de inicialización de la base de datos.

## Requisitos Previos

*   Docker Desktop instalado.
*   Git para el control de versiones.

## Despliegue en Desarrollo

Para levantar el entorno de desarrollo, sigue estos pasos:

1.  Navega a la carpeta del proyecto.
2.  Ejecuta los archivos de Docker Compose para cada servicio:
    ```bash
    # Backend (MySQL + Apache PHP)
    docker-compose -f backend/dev/docker-compose.yml up -d

    # Frontend (Apache)
    docker-compose -f frontend/dev/docker-compose.yml up -d
    ```
3.  Accede a la aplicación:
    -   **Frontend**: [http://localhost](http://localhost)
    -   **Backend (API)**: [http://localhost:8080](http://localhost:8080)

## Despliegue en Producción

El despliegue en producción está diseñado para ser utilizado en **AWS (EC2)** y plataformas de auto-despliegue como **Render**.

1.  Configura el archivo `.env` en `backend/prod/` con las credenciales de producción.
2.  Despliega utilizando los archivos de producción:
    ```bash
    docker-compose -f backend/prod/docker-compose.yml up -d
    docker-compose -f frontend/prod/docker-compose.yml up -d
    ```

## Características Implementadas

*   **CORS**: Configurado en el servidor Apache del backend para permitir peticiones desde el dominio del frontend.
*   **VirtualHosts**: Configuración personalizada para desarrollo y producción.
*   **HTACCESS**: Redirecciones automáticas y gestión de errores 404 personalizada.
*   **Persistencia**: Volúmenes de Docker para asegurar que los datos de MySQL no se pierdan.

---
**Autor**: Eva Juagua
**Email**: evajuagua@alu.edu.gva.es
