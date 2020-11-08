// ALERTS
bootstrap_alert = function() {}
bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html(
                '<div class="alert alert-dimissable alert-warning fade in"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>')
        }
bootstrap_alert.danger = function(message) {
    $('#alert_placeholder').html(
        '<div class="alert alert-dimissable alert-danger fade in"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>')
}
bootstrap_alert.success = function(message) {
    $('#alert_placeholder').html(
        '<div class="alert alert-dimissable alert-success fade in"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>')
}
bootstrap_alert.success = function(message) {
    $('#alert_placeholder').html(
        '<div class="alert alert-dimissable alert-success fade in"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>')
}
bootstrap_alert.info = function(message) {
    $('#alert_placeholder').html(
        '<div class="alert alert-dimissable alert-info fade in"><a class="close" data-dismiss="alert">&times;</a><span>'+message+'</span></div>')
}

function logout(){
    sessionStorage.clear();
    window.location.href = "login.php";
}

function check_role() {
    // roles: 1 admin, 2 logged user, 3 guest user
    var user_id = sessionStorage.getItem('id');
    var user_type = sessionStorage.getItem('user_type');
    var user_name = sessionStorage.getItem('display_name');
    var role = 3;
    if(user_id != null){
        role = user_type;
    }
    if (role == 1 || role == 2){
        $('#user_name').html(user_name);
        document.getElementById("menu_log_in_top").setAttribute('style', 'display: none;');
        document.getElementById("menu_log_out_top").setAttribute('style', '');
        document.getElementById("menu_my_profile_top").setAttribute('style', '');
        document.getElementById("menu_log_out").setAttribute('style', '');
        document.getElementById("menu_my_profile").setAttribute('style', '');
        document.getElementById("menu_library").setAttribute('style', '');
        if (role == 1){
        document.getElementById("menu_massive_load").setAttribute('style', '');
        document.getElementById("menu_create_user").setAttribute('style', '');
        document.getElementById("menu_games").setAttribute('style', '');
        document.getElementById("menu_reports").setAttribute('style', '');
        }
    }
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}
