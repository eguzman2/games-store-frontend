
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/register.js"></script>
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
            <div class="row" style="width: 70%">
                <div class="col-lg-12 text-center v-center">
                    <h1>Registrarse</h1>
                    <p class="lead">Registrate para formar parte del club gamer</p>

                    <br>
                    <br><div id="alert_placeholder"></div>
                    <br>

                    <row class="row">
                        <div class="col-lg-6">
                            <div id="first-name-input-div" class="form-group">
                                <label>Primer Nombre</label>
                                <input id="first_name" class="form-control" type="text">
                                <label id="first-name-error-label" class="control-label" for="inputError"></label>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div id="lastname-input-div" class="form-group">
                                <label>Apellido</label>
                                <input id="last_name" class="form-control">
                                <label id="lastname-error-label" class="control-label" for="inputError"></label>
                            </div>
                        </div>
                    </row>
                    <row class="row">
                        <div class="col-lg-12">
                            <div id="username-input-div" class="form-group">
                                <label>Nombre de Usuario</label>
                                <input id="username" class="form-control">
                                <label id="username-error-label" class="control-label" for="inputError"></label>
                            </div>
                        </div>
                    </row>
                    <row class="row">
                        <div class="col-lg-6">
                            <div id="password-input-div" class="form-group">
                                <label>Contraseña</label>
                                <input id="password" type="password" class="form-control">
                                <label id="password-error-label" class="control-label" for="inputError"></label>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div id="confirm-password-input-div" class="form-group">
                                <label>Confirmar contraseña</label>
                                <input id="confirm_password" type="password" class="form-control">
                                <label id="confirm-password-error-label" class="control-label" for="inputError"></label>
                            </div>
                        </div>
                    </row>
                    <row class="row">
                        <button onclick="register()" class="btn btn-primary">
                            Registrarse
                        </button>
                        <a href="login.php" class="btn btn-default">Iniciar Sesión</a>
                    </row>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
