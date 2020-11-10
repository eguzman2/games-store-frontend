
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/recover_password.js"></script>
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
                    <h1>Recuperar contraseña</h1>
                    <p class="lead">Ingresa tu nombre de usuario para recuperar tu contraseña</p>

                    <br>
                    <br>
                    <div id="alert_placeholder"></div>
                    <br>
                    <row class="row">
                        <div class="col-lg-12">
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
                            </br>
                            <button onclick="recover()" class="btn btn-primary">Recuperar Contraseña</button>
                            <a href="login.php" class="btn btn-default">Iniciar Sesión</a>
                        </div>
                    </row>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
