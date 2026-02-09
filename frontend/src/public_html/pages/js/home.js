
//Mostar / Ocultar el formulario de nueva película
function showHideAddForm() {
    var tag = document.getElementById("new-form");
    if (tag.style.display === "none")
        tag.style.display = "block";
    else
        tag.style.display = "none";
}

//------- Gestión de la tabla de películas -------
function loadRow(film, tableBody) {
    let row = '<tr>';
    row += '<th scope="row">' + film.id + '</th>';
    row += '<td>' + film.name + '</td>';
    row += '<td>' + film.director + '</td>';
    row += '<td>' + film.classification + '</td>';

    let detailBtn = '<td>';
    detailBtn += '<a href="/pages/detail.html?id=' + film.id + '" role="button" class="btn btn-primary btn-sm">Ver detalle</a>';
    detailBtn += '</td>';

    row += detailBtn;
    row += '</tr>';

    tableBody.innerHTML += row;
}

function loadDataInTable(filmsJSON, tableBody) {
    //Si no hay películas muestro un mensaje, si no, las cargo en la tabla
    if (filmsJSON.length <= 0) {
        document.getElementById("no-films-message").style.display = "block";
    } else {
        for (let i in filmsJSON) {
            let film = filmsJSON[i];
            loadRow(film, tableBody);
        }
    }
}

function loadFilms() {

    let tableBody = document.getElementById("tbody-container");
    tableBody.innerHTML = "";

    console.log("Fetching from: " + apiUrl + "/api/films/get_films.php");
    fetch(apiUrl + "/api/films/get_films.php", {
        method: 'GET'
    })
        .then((response) => {
            console.log("Response status: " + response.status);
            if (response.status == 500)
                alert("Se ha producido un error, vuélvelo a intentar, si el problema persiste contacte con el administrador");
            else {
                response.json().then((data) => {
                    console.log("Data received:", data);
                    if (data.status == "OK") {
                        loadDataInTable(data.data, tableBody);
                    } else
                        alert("Se ha producido un error, vuélvelo a intentar, si el problema persiste contacte con el administrador");
                }).catch(err => {
                    console.error("JSON parse error:", err);
                    alert("Error al procesar la respuesta del servidor");
                });
            }
        })
        .catch(err => {
            console.error("Fetch error:", err);
            alert("No se pudo conectar con el servidor: " + err.message);
        });

}
//-------------------------------------


function addNewFilm() {
    //Monto los parámetros de la llamada
    let jsonData = {
        name: document.getElementById("name").value,
        director: document.getElementById("director").value,
        classification: document.getElementById("classification").value,
        img: document.getElementById("img").value,
        plot: document.getElementById("plot").value
    }

    console.log("Adding new film with data:", jsonData);
    fetch(apiUrl + "/api/films/add_film.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
        .then((response) => {
            console.log("Add film response status:", response.status);
            if (response.status == 500)
                alert("Se ha producido un error, vuélvelo a intentar, si el problema persiste contacte con el administrador");
            else {
                response.json().then((data) => {
                    console.log("Add film data received:", data);
                    if (data.status == "OK") {
                        loadFilms();

                        //Limpio el formulario
                        showHideAddForm();
                        document.getElementById("form-new-tag").reset();

                        alert("Película añadida correctamente");
                    } else
                        alert("Se ha producido un error: " + data.message);
                }).catch(err => {
                    console.error("Add film JSON parse error:", err);
                    alert("Error al procesar la respuesta del servidor al añadir película");
                });
            }
        })
        .catch(err => {
            console.error("Add film fetch error:", err);
            alert("No se pudo conectar con el servidor para añadir la película: " + err.message);
        });

    return false;
}


document.addEventListener("DOMContentLoaded", function (event) {
    //Cuando carga la página, llamo al método que obtiene las películas y pinta los resultados
    loadFilms();
});


