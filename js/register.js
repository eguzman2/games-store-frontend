function register() {
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
        'first_name': firstname,
        'last_name': last_name,
        'username': username,
        'password': password
    };

    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_register);
    fetch(url_register, {
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
            bootstrap_alert.warning("<strong> No se pudo realizar el registro: " + response.message + "</strong>");
        } else{
            sessionStorage.setItem('id', response.id);
            var display_name = response.first_name + " " + response.last_name;
            sessionStorage.setItem('display_name', display_name);
            sessionStorage.setItem('user_type', response.user_type);
            sessionStorage.setItem('username', response.username);
            window.location.href = "index.php";
        }
    })
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        register();
    }
});
