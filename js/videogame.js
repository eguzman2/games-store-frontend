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
        document.getElementById("leave_comment").setAttribute('style', '');
    }
}
function get_video_game() {
    var game_id = getUrlParam('id', false);
    console.log(game_id);
    if (!game_id || game_id == "undefined"){
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
            $('#game_id').val(game_id);
            $('#add_button').attr({
                "onclick": "add_to_library("+game_id+")"
            });
            $('#description').html(response.description);
            check_game_in_library(game_id);
            loadComments(game_id)
        }
    })
}

function check_game_in_library(game_id) {
    var user_id = sessionStorage.getItem('id');
    if (!user_id || user_id == "undefined"){
        // bootstrap_alert.warning("<strong> Algo salio mal :( por favor vuelve a iniciar sesion</strong>");
        return false;
    }
    var request_data = {
        'user_id': user_id,
        'game_id': game_id
    };
    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_check_user_videogame);
    fetch(url_check_user_videogame, {
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
            bootstrap_alert.warning("<strong> Ocurrio un error al revisar el juego en la biblioteca: " + response.message + "</strong>");
        } else{
            if(response.exists){
                $('#add_button').attr({
                    "disabled": ""
                });
                $('#add_button').html("Ya en mi biblioteca")
            }
        }
    })
}

function add_to_library(game_id) {
    var user_id = sessionStorage.getItem('id');
    if (!user_id || user_id == "undefined"){
        // bootstrap_alert.warning("<strong> Algo salio mal :( por favor vuelve a iniciar sesion</strong>");
        return false;
    }
    var request_data = {
        'user_id': user_id,
        'game_id': game_id
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_add_user_videogame);
    fetch(url_add_user_videogame, {
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
            bootstrap_alert.warning("<strong> No se pudo agregar el juego: " + response.message + "</strong>");
        } else{
            bootstrap_alert.success("<strong> Se ha agregado el juego a <a href='library.php'>tu biblioteca</a></strong>");
            $('#add_button').attr({
                "disabled": ""
            });
            $('#add_button').html("Ya en mi biblioteca")
        }
    })
}
function addComment() {
    var user_id = sessionStorage.getItem('id');
    if (!user_id || user_id == "undefined"){
        bootstrap_alert.warning("<strong> Algo salio mal :( por favor vuelve a iniciar sesion</strong>");
        return false;
    }
    var game_id = $('#game_id').val();
    console.log("game: " + game_id)
    if (!game_id || game_id == "undefined"){
        bootstrap_alert.warning("<strong> Algo salio mal :(</strong>");
        return false;
    }
    var username = sessionStorage.getItem('username');
    var comment = $("#text_comment").val();
    var request_data = {
        'user_id': user_id,
        'game_id': game_id,
        'username': username,
        'comment': comment
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_add_videogame_comment);
    fetch(url_add_videogame_comment, {
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
            bootstrap_alert.warning("<strong> No se pudo agregar el commentario: " + response.message + "</strong>");
        } else{
            loadComments(game_id);
        }
    })
}
function loadComments(game_id) {
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
            var comments_string = ""
            for (let comment_counter = 0; comment_counter < response.comments.length; comment_counter++) {
                const element = response.comments[comment_counter];
                comments_string += '<div class="panel panel-default"><div class="panel-heading">'+element.username+'</div>';
                comments_string += '<div class="panel-body">'+element.comment+'</div></div>';
            }
            $('#comments').html(comments_string);
        }
    })
}