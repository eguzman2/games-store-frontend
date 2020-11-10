
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/login.js"></script>
</head>
<body>
    <div id="wrapper">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="navbar-header">            
            <a class="navbar-brand" href="index.php">
                <img class="media-object" src="logo.png" style="height: 30px;" alt="INH Videogames">
            </a>
        </div>
    </nav>
        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12 text-center v-center">
                    <h1>Inicia Sesión</h1>
                    <p class="lead">Descubre y disfruta los mejores videojuegos </p>

                    <br>
                    <br>
                    <div id = "alert_placeholder"></div>
                    <br>

                    <row>
                        <div id="username-input-div" class="form-group">
                            <label id="username-error-label" class="control-label" for="inputError"></label>
                            <div class="input-group" style="width: 340px; text-align: center; margin: 0 auto;">
                                <span class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </span>
                                <input id="username_input" class="form-control input-lg"
                                    placeholder="Usuario" type="text">
                            </div>
                        </div>

                        <div id="password-input-div" class="form-group">
                            <label id="password-error-label" class="control-label" for="inputError"></label>
                            <div class="input-group" style="width: 340px; text-align: center; margin: 0 auto;">
                                <span class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </span>
                                <input id="password_input" class="form-control input-lg"
                                    placeholder="Contraseña" type="password">
                            </div>
                        </div>

                        <p class="help-block"><a href="recover_password.php">Olvidé mi contraseña</a></p>
                        <button onclick="login()" class="btn btn-primary">Iniciar Sesión</button>
                        <a href="register.php" class="btn btn-default">Registrarse</a>
                    </row>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
