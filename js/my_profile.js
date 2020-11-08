function update() {
    function error_input(div, label, message) {
        $(div).attr({
            "class": "form-group has-error"
        });
        $(label).html(message);
    }
    function clear_inputs(){
        $('#first-name-input-div').attr({
            "class": "form-group"
        });
        $('#first-name-error-label').html("");
        $('#lastname-input-div').attr({
            "class": "form-group"
        });
        $('#lastname-error-label').html("");
        $('#username-input-div').attr({
            "class": "form-group"
        });
        $('#username-error-label').html("");
        $('#password-input-div').attr({
            "class": "form-group"
        });
        $('#password-error-label').html("");
        $('#confirm-password-input-div').attr({
            "class": "form-group"
        });
        $('#confirm-password-error-label').html("");
    }

    clear_inputs();
    var firstname = $("#first_name").val();
    var last_name = $("#last_name").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();

    console.log(firstname);
    var obligatory_field_msg = '<strong>Campo obligatorio</strong>';

    if(firstname == undefined || firstname == ''){
        error_input('#first-name-input-div', '#first-name-error-label', 
        obligatory_field_msg);
        return false;
    }
    if(last_name == undefined || last_name == ''){
        error_input('#lastname-input-div', '#lastname-error-label', 
        obligatory_field_msg);
        return false;
    }
    if(username == undefined || username == ''){
        error_input('#username-input-div', '#username-error-label', 
        obligatory_field_msg);
        return false;
    }
    // check username
    if (!username.match(/^[0-9a-zA-Z]+$/)) {
        error_input('#username-input-div', '#username-error-label',
        'El nombre de usuario solo puede contener letras y numeros');
    }
    if (!username.charAt(0).match(/^[a-zA-Z]+$/)) {
        error_input('#username-input-div', '#username-error-label',
        'El nombre de usuario debe iniciar con una letra');
    }
    if(password == undefined || password == ''){
        error_input('#password-input-div', '#password-error-label', 
        obligatory_field_msg);
        return false;
    }
    if(confirm_password == undefined || confirm_password == ''){
        error_input('#confirm-password-input-div', '#confirm-password-error-label', 
        obligatory_field_msg);
        return false;
    }

    if (password != confirm_password){
        error_input('#confirm-password-input-div', '#confirm-password-error-label', 
        'Las contraseñas no coinciden');
        return false;
    }
    var request_data = {
        'id': sessionStorage.getItem('id'),
        'first_name': firstname,
        'last_name': last_name,
        'username': username,
        'password': password
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_update_user);
    fetch(url_update_user, {
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
            bootstrap_alert.warning("<strong> No se pudo actualizar: " + response.message + "</strong>");
        } else{
            bootstrap_alert.success("<strong>" + response.message + "</strong>");
            var display_name = response.first_name + " " + response.last_name;
            sessionStorage.setItem('display_name', display_name);
        }
    })
}

function load_user() {
    var request_data = {
        'id': sessionStorage.getItem('id'),
        'with_password': true
    }
    console.log(request_data);
    var body = JSON.stringify(request_data)
    fetch(url_get_user, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => {
        console.error('Error:', err)
    })
    .then(response => {
        console.log(response);
        if(response.error){
            console.error('Error:', response.message)
        } else{
            update_user_form(response);
            console.log(response.message);
        }
    })
}

function update_user_form(user) {
    $("#first_name").val(user.first_name);
    $("#last_name").val(user.last_name);
    $("#username").val(user.username);
    $("#password").val(user.password);
    $("#confirm_password").val(user.password);
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        update();
    }
});

$( document ).ready(function() {
    load_user();
});
