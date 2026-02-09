//Rutas de las llamadas HTTP
let apiUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? "http://" + window.location.hostname + ":8080"
    : "";
