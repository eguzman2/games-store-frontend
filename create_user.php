<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/create_user.js"></script>
</head>
<body>
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <div class="container">
                <div class="col-lg-12">
                    <h1>Crear usuario</h1>
                </div>
                <hr/>
                <div class="row">
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
                        <div class="form-group">
                            <button onclick="create()" class="btn btn-primary">
                                Crear usuario
                            </button>
                        </div>
                    </row>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
