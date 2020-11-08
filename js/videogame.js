function videogame() {
    get_video_game();
    check_role_videogame();
}
function check_role_videogame() {
    var user_id = sessionStorage.getItem('id');
    var user_type = sessionStorage.getItem('user_type');
    var user_name = sessionStorage.getItem('display_name');
    var role = 3;
    if(user_id != null){
        role = user_type;
    }
    if (role != 3){
        document.getElementById("div_add_button").setAttribute('style', '');
    }
}
function get_video_game() {
    game_id = getUrlParam('id', false);
    console.log(game_id);
    if (!game_id){
        bootstrap_alert.warning("<strong> Algo salio mal :( por favor vuelve a seleccionar un videojuego</strong>");
        return false;
    }
    var request_data = {
        'id': game_id
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_get_videogame);
    fetch(url_get_videogame, {
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
            bootstrap_alert.warning("<strong> No se pudo obtener la informacion del videojuego: " + response.message + "</strong>");
        } else{
            banner = '<div class="row bg-cover" style="background-image: url('+response.banner+'); height:300px"></div>'
            $('#banner').html(banner);
            $('#name').html(response.name);
            $('#year').html(response.year);
            image = '<img id="image" class="thumbnail img-responsive" src="'+response.picture+'" />';
            $('#image').html(image);
            categories = ''
            if(response.category1){
                categories = categories + '<span class="label label-default">'+response.category1+'</span>\n ';
            }
            if(response.category2){
                categories = categories + '<span class="label label-default">'+response.category2+'</span>\n ';
            }
            if(response.category3){
                categories = categories + '<span class="label label-default">'+response.category3+'</span>\n ';
            }
            $('#categories').html(categories);
            if (response.price > 0){
                price = 'Q. ' + response.price;
            } else {
                price = 'Gratis';
            }
            $('#price').html(price);
            $('#add_button').attr({
                "onclick": "add_to_library("+game_id+")"
            });
            $('#description').html(response.description);

        }
    })
}
function add_to_library(game_id) {
    return true;
    var request_data = {
        'username': username,
        'password': password
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_login);
    fetch(url_login, {
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
            bootstrap_alert.warning("<strong> No se pudo iniciar sesion: " + response.message + "</strong>");
        } else{
            sessionStorage.setItem('id', response.id);
            var display_name = response.first_name + " " + response.last_name;
            sessionStorage.setItem('display_name', display_name);
            sessionStorage.setItem('user_type', response.user_type);
            window.location.href = "index.php";
        }
    })
}