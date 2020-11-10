<nav onload="check_role()" class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        
        <a class="navbar-brand" href="index.php">
            <img class="media-object" src="logo.png" style="height: 30px;" alt="INH Videogames">
        </a>
    </div>
    <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul id="active" class="nav navbar-nav side-nav">
            <li><a href="index.php"><i class="fa fa-gamepad"></i> Catálogo</a></li>
            <li style="display: none;" id="menu_library"><a href="library.php"><i class="fa fa-tasks"></i> Mi biblioteca</a></li>
            <li style="display: none;" id="menu_games"><a href="games_crud.php"><i class="fa fa-pencil"></i> Gestionar Juegos</a></li>
            <li style="display: none;" id="menu_massive_load"><a href="massive_load.php"><i class="fa fa-list-alt"></i> Carga Masiva</a></li>
            <li style="display: none;" id="menu_create_user"><a href="create_user.php"><i class="fa fa-address-book-o"></i> Crear usuario</a></li>
            <li style="display: none;" id="menu_reports">
                <a data-toggle="dropdown"><i class="fa fa-file-text-o"></i> Reportes</a>
                <ul class="dropdown-menu">
                    <li><a href="videogames_report.php">Videojuegos</a></li>
                    <li><a href="users_report.php">Usuarios</a></li>
                    <li><a href="comments_report.php">Comentarios</a></li>
                </ul>
            </li>
            <li style="display: none;" id="menu_my_profile"><a href="profile.php"><i class="fa fa-gear"></i> Mi perfil</a></li>
            <li style="display: none;" id="menu_log_out" onclick="logout()"><a href="#"><i class="fa fa-sign-out"></i> Cerrar Sesión</a></li>
            <li id="menu_log_in"><a href="login.php"><i class="fa fa-sign-in"></i> Iniciar Sesión</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right navbar-user">
            <li>
                <div class="navbar-search">
                    <div class="form-group input-group">
                        <input id="search_input" name="search_input" type="text" placeholder="Busca por categoria" class="form-control">
                        <span class="input-group-btn">
                            <button onclick="searchByCategory()" class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
            </li>
            <li class="divider-vertical"></li>
            <li class="dropdown user-dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <span id="user_name"></span><b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li style="display: none;" id="menu_my_profile_top"><a href="profile.php"><i class="fa fa-gear"></i> Mi perfil</a></li>
                    <li id="menu_log_in_top"><a href="login.php"><i class="fa fa-sign-in"></i> Iniciar Sesión</a></li>
                    <li class="divider"></li>
                    <li style="display: none;" onclick="logout()" id="menu_log_out_top"><a href="#"><i class="fa fa-power-off"></i> Cerrar Sesión</a></li>
                    <li id="menu_sign_in_top"><a href="register.php"><i class="fa fa-user"></i> Registrarse</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
<script>
    $("#search_input").on('keyup', function (e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            searchByCategory()
        }
    });
    check_role();
</script>