function create_videogame() {
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
    var name = $("#name").val();
    var year = $("#year").val();
    var price = $("#price").val();
    var category_1 = $("#category_1").val();
    var category_2 = $("#category_2").val();
    var category_3 = $("#category_3").val();
    var picture = $("#picture").val();
    var banner = $("#banner").val();
    var description = $("#description").val();

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
    if(parseFloat(price)){
        price = parseFloat(price);
    } else {
        error_input('#price-input-div', '#price-error-label', 
        "<strong>Ingrese un numero valido</strong>");
        return false;
    }

    console.log(price);
    console.log(typeof price);

    var request_data = {
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
    console.log(url_create_videogame);
    fetch(url_create_videogame, {
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
            bootstrap_alert.warning("<strong> No se pudo agregar el registro: " + response.message + "</strong>");
        } else{
            bootstrap_alert.success("El juego <strong>" + name + "</strong> se ha creado exitosamente!");
        }
    })
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        create_videogame();
    }
});
