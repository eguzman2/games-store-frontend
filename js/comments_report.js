
function loadVideoGames() {
    var body = JSON.stringify({})
    console.log(url_get_videogames);
    fetch(url_get_videogames, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => {
        console.error('Error:', err)
        bootstrap_alert.danger('<strong>A ocurrido un error al conectar con el servidor.</strong> Contacte a soporte tecnico.');
    })
    .then(response => {
        console.log(response);
        if(response.error){
            bootstrap_alert.warning("<strong> No se pudo obtener el listado de videojuegos</strong>");
        } else{
            options = "<option value='0'>Selecciona un videojuego</option>";
            for (let counter = 0; counter < response.length; counter++) {
                const element = response[counter];
                options += '<option value="'+element.id+'">'+element.name+'</option>';
            }
            $('#games_select').html(options);
        }
    })
    $('#games_select').on('change', function() {
        getComments(this.value);
    });
}

function getComments(game_id) {
    var request_data = {
        'game_id': game_id,
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_get_videogame_comments);
    fetch(url_get_videogame_comments, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => {
        console.error('Error:', err)
        bootstrap_alert.danger('<strong>A ocurrido un error al conectar con el servidor.</strong> Contacte a soporte tecnico.');
    })
    .then(response => {
        console.log(response);
        if(response.error){
            // bootstrap_alert.warning("<strong> No se pudo agregar el commentario: " + response.message + "</strong>");
        } else{
            var table_row = ""
            for (let comment_counter = 0; comment_counter < response.comments.length; comment_counter++) {
                const element = response.comments[comment_counter];
                table_row += "<tr>"
                table_row += "<td>" + element.id + "</td>"
                table_row += "<td>" + element.username + "</td>"
                table_row += "<td>" + element.comment + "</td>"
                table_row += "</tr>"
            }
            $('#table_content').html(table_row);
        }
    })
}