function loadGames() {
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
            bootstrap_alert.warning("<strong> No se pudo obtener la informacion del los videojuegos</strong>");
        } else{
            games_str = ""
            for (let game_counter = 0; game_counter < response.length; game_counter++) {
                const element = response[game_counter];
                console.log(element);

                games_str += "<tr>"
                games_str += "<td>" + element.id + "</td>"
                games_str += "<td>" + element.name + "</td>"
                categories = ""
                if (element.category1){
                    categories += element.category1;
                }
                if (element.category2){
                    if (categories != ""){
                        categories += ", "
                    }
                    categories += element.category2
                }
                if (element.category3){
                    if (categories != ""){
                        categories += ", "
                    }
                    categories += element.category3
                }
                games_str += "<td>" + categories + "</td>"
                if (element.price > 0){
                    price = 'Q. ' + element.price;
                } else {
                    price = 'Gratis';
                }
                games_str += "<td>" + price + "</td>"

                games_str += "<td>"
                games_str += '<button onclick="edit_game(' + element.id + ')" class="btn btn-primary"><i class="fa fa-pencil"></i></button>';
                games_str += '<button onclick="delete_game(' + element.id + ')" class="btn btn-danger"><i class="fa fa-trash"></i></button>';
                games_str += "</td>";
            }
            console.log(games_str)
            $('#table_content').html(games_str);
        }
    })
}