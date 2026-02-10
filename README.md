# Proyecto Final DAW - Gestión de Películas

Este proyecto consiste en una aplicación web de gestión de películas desarrollada con una arquitectura de Microservicios utilizando **Docker Compose**. La aplicación está preparada para funcionar tanto en entornos locales como en producción (AWS y Render).

## Estructura del Proyecto

*   `backend/`: API desarrollada en PHP. Incluye configuraciones para Docker (Apache + PHP).
*   `frontend/`: Interfaz de usuario (HTML/JS/CSS) servida con Apache.
*   `mantenimiento/`: Página de cortesía para periodos de mantenimiento.
*   `sql/`: Scripts SQL para la creación del esquema y carga inicial de datos.

## 🛠️ Tecnologías Utilizadas

*   **Backend**: PHP 8.x, Apache.
*   **Frontend**: JavaScript (Vanilla), HTML5, CSS3.
*   **Base de Datos**: MySQL (Local y Clever Cloud).
*   **Infraestructura**: Docker, Docker Compose.
*   **Despliegue**: AWS (EC2), Render (PaaS).

## 💻 Despliegue en Desarrollo (Local)

Para levantar el entorno local:

1.  Navega a la raíz del proyecto.
2.  Levanta los contenedores:
    ```bash
    docker-compose -f backend/dev/docker-compose.yml up -d
    docker-compose -f frontend/dev/docker-compose.yml up -d
    ```
3.  La web estará disponible en [http://localhost](http://localhost) (puerto 80) y la API en [http://localhost:8080](http://localhost:8080).

## 🚀 Despliegue en Producción

### 1. Base de Datos (Clever Cloud)
Para el entorno de producción, utilizamos una base de datos MySQL gestionada en **Clever Cloud**.
- **Ventaja**: Evita el borrado de datos en plataformas PaaS como Render que tienen sistemas de archivos efímeros.
- **Configuración**: Las credenciales se encuentran en `backend/prod/dbconfiguration.yml` (asegúrate de que este archivo esté presente en el servidor).

### 2. Despliegue en Render
El proyecto está configurado para despliegue automático en Render:
- **Backend**: Configurado como un *Web Service* usando el `Dockerfile` de `backend/prod/`.
- **Frontend**: Configurado como un *Static Site* apuntando a la carpeta `frontend/src/public_html`.
- **Conectividad**: El archivo `urls.js` detecta automáticamente el dominio `.onrender.com` para apuntar a la URL de producción de la API.

### 3. Despliegue en AWS (EC2)
Para el despliegue en AWS EC2:
1.  Se utiliza una instancia EC2 con Docker y Docker Compose instalados.
2.  Configuración de red: El puerto **8080** debe estar abierto en el *Security Group* para permitir el acceso a la API.
3.  Dominios: Se utilizan servicios como FreeDNS para asignar nombres de dominio (ej: `chickenkiller.com`) a la IP de la instancia.

## 🔧 Errores Solucionados y Troubleshooting

Durante el desarrollo y despliegue, se han abordado varios retos técnicos:

### Solución a Conflictos de CORS
Se detecto un conflicto donde el servidor Apache (`vhost.conf`) y el código PHP enviaban cabeceras `Access-Control-Allow-Origin` duplicadas, lo que causaba errores en el navegador.
- **Solución**: Se centralizó la gestión de CORS en PHP y se eliminaron las directivas redundantes de los archivos `vhost.conf`.

### Error 500 (Base de Datos no encontrada)
En AWS, la API devolvía un Error 500 porque el archivo `dbconfiguration.yml` no se subía al repositorio (estaba en `.gitignore`).
- **Solución**: Se ajustó el `.gitignore` para permitir la subida de la configuración de producción y se verificó la correcta sincronización con Clever Cloud.

### Enrutamiento de API Inteligente
Para evitar cambiar manualmente las URLs de la API en cada despliegue, se implementó una lógica en `frontend/src/public_html/config/urls.js`:
- Detecta si el origen es `localhost`, `render.com` o un dominio personalizado de AWS.
- Asigna la `apiUrl` correspondiente de forma automática.

---
**Autor**: Eva Juagua
**Email**: evajuagua@alu.edu.gva.es
