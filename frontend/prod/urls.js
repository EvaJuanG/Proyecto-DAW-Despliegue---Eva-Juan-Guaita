let apiUrl = "";

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Si estás en tu PC local
    apiUrl = "http://localhost:8080";
} else {
    // Si estás en AWS (usando tu dominio o IP pública)
    // El puerto 8080 es donde escucha el backend en AWS según docker-compose
    apiUrl = "http://" + window.location.hostname + ":8080";
}
