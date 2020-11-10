function loadVideogame(){

    game_id = getUrlParam('id', false);
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
            $('#game_id').val(game_id);
            $('#name').val(response.name);
            $('#year').val(response.year);
            $('#price').val(response.price);
            $('#banner').val(response.banner);
            $('#category_1').val(response.category1);
            $('#category_2').val(response.category2);
            $('#category_3').val(response.category3);
            $('#picture').val(response.picture);
            $('#description').val(response.description);
        }
    })
}

function edit_videogame() {
    function error_input(div, label, message) {
        $(div).attr({
            "class": "form-group has-error"
        });
        $(label).html(message);
    }
    function clear_inputs(){
        $('#name-input-div').attr({
            "class": "form-group"
        });
        $('#name-error-label').html("");
        $('#picture-input-div').attr({
            "class": "form-group"
        });
        $('#picture-error-label').html("");
        $('#banner-input-div').attr({
            "class": "form-group"
        });
        $('#banner-error-label').html("");
    }

    clear_inputs();
    var game_id = $('#game_id').val();
    var name = $("#name").val();
    var year = $("#year").val();
    var price = $("#price").val();
    var category_1 = $("#category_1").val();
    var category_2 = $("#category_2").val();
    var category_3 = $("#category_3").val();
    var picture = $("#picture").val();
    var banner = $("#banner").val();
    var description = $("#description").val();

    console.log(price);
    console.log(typeof price);
    var obligatory_field_msg = '<strong>Campo obligatorio</strong>';

    if(name == undefined || name == ''){
        error_input('#name-input-div', '#name-error-label', 
        obligatory_field_msg);
        return false;
    }
    if(picture == undefined || picture == ''){
        error_input('#picture-input-div', '#picture-error-label', 
        obligatory_field_msg);
        return false;
    }
    if(banner == undefined || banner == ''){
        error_input('#banner-input-div', '#banner-error-label', 
        obligatory_field_msg);
        return false;
    }
    // check price
    if(typeof parseFloat(price) == typeof 0.0){
        price = parseFloat(price);
    } else {
        error_input('#price-input-div', '#price-error-label', 
        "<strong>Ingrese un numero valido</strong>");
        return false;
    }

    console.log(price);
    console.log(typeof price);

    var request_data = {
        'id': game_id,
        'name': name,
        'year': year,
        'price': price,
        'category1': category_1,
        'category2': category_2,
        'category3': category_3,
        'picture': picture,
        'banner': banner,
        'description': description
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_edit_videogame);
    fetch(url_edit_videogame, {
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
            bootstrap_alert.warning("<strong> No se pudo editar el registro: " + response.message + "</strong>");
        } else{
            bootstrap_alert.success("El juego <strong>" + name + "</strong> se ha modificado exitosamente!");
        }
    })
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        edit_videogame();
    }
});
