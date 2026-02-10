//Rutas de las llamadas HTTP
//Rutas de las llamadas HTTP
let apiUrl = (window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1'))
    ? "http://" + window.location.hostname + ":8080"
    : "http://" + window.location.hostname + ":8080"; // Fallback for other local addresses
