function catalogue() {
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
            game_counter = 0
            games_str = "<div class='row'>"
            for (let game_counter = 0; game_counter < response.length; game_counter++) {
                const element = response[game_counter];
                console.log(element);
                if (game_counter % 3 == 0){
                    if (game_counter != 0){
                        games_str += "</div>";
                    }
                    games_str += "<div class='row'>";
                }
                games_str += '<div class="col-md-4"><div class="well"><a href="videogame.php?id=' + element.id + '">';
                games_str += '<img class="thumbnail img-responsive" src="' + element.picture + '"/></a>';
                if (element.price > 0){
                    price = 'Q. ' + element.price;
                } else {
                    price = 'Gratis';
                }
                categories = ''
                if(element.category1){
                    categories = categories + ' <span class="label label-default">'+element.category1+'</span>\n ';
                }
                if(element.category2){
                    categories = categories + '<span class="label label-default">'+element.category2+'</span>\n ';
                }
                if(element.category3){
                    categories = categories + '<span class="label label-default">'+element.category3+'</span>\n ';
                }
                games_str += '<strong><h3>'+ element.name + '</h3>' + categories;
                games_str += '<span>'+ price + '</span></strong>';
                games_str += '</div></div>';
            }
            games_str += "</div>";
            $('#container').html(games_str);
        }
    })
}