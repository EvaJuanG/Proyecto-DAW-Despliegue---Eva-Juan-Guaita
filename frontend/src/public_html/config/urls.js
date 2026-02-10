let apiUrl = "";

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Si estás en tu PC local
    apiUrl = "http://localhost:8080";
} else if (window.location.hostname.includes('render.com')) {
    // Si estás visualizando la web desde Render
    apiUrl = "https://pelis-backend.onrender.com";
} else {
    // Si estás en AWS (usando tu dominio de chickenkiller)
    apiUrl = "http://" + window.location.hostname + ":8080";
}