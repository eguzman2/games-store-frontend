function login() {
    function error_username(message) {
        $('#username-input-div').attr({
            "class": "form-group has-error"
        });
        $('#username-error-label').html(message);
    }
    function error_password(message) {
        $('#password-input-div').attr({
            "class": "form-group has-error"
        });
        $('#password-error-label').html(message);
    }
    function clear_inputs(){
        $('#username-input-div').attr({
            "class": "form-group"
        });
        $('#username-error-label').html("");
        $('#password-input-div').attr({
            "class": "form-group"
        });
        $('#password-error-label').html("");
    }
    clear_inputs();
    var username = $("#username_input").val();
    var password = $("#password_input").val();

    console.log(username);
    if(username == undefined || username == ''){
        error_username('<strong>El usuario no puede estar vacio.</strong>');
        return false;
    }
    if(password == undefined || password == ''){
        error_password('<strong>La contraseña no puede estar vacia.</strong>');
        return false;
    }
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
            sessionStorage.setItem('username', response.username);
            window.location.href = "index.php";
        }
    })
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        login();
    }
});
