function recover() {
    function error_username(message) {
        $('#username-input-div').attr({
            "class": "form-group has-error"
        });
        $('#username-error-label').html(message);
    }
    function clear_inputs(){
        $('#username-input-div').attr({
            "class": "form-group"
        });
        $('#username-error-label').html("");
    }
    clear_inputs();
    var username = $("#username_input").val();

    console.log(username);
    if(username == undefined || username == ''){
        error_username('<strong>El usuario no puede estar vacio.</strong>');
        return false;
    }
    var request_data = {
        'username': username,
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_recover_password);
    fetch(url_recover_password, {
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
            bootstrap_alert.warning("<strong> No se pudo recuperar la contraseña: " + response.message + "</strong>");
        } else{
            bootstrap_alert.success("<strong> Contraseña: " + response.password + "</strong>");
        }
    })
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        recover();
    }
});
