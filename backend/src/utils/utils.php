<?php

// Manejo global de CORS preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    http_response_code(200);
    exit;
}

//Quiero que todas las respuestas tengan el mismo formato, para ello me creo una función que me devuelve la respuesta
function getResponse($code = 200, $status = "", $message = "", $data = "")
{
    $response = array(
        "status" => $status,
        "message" => $message,
        "data" => $data
    );

    header("Content-Type:application/json");
    http_response_code($code);
    return json_encode($response, JSON_UNESCAPED_UNICODE);
}
