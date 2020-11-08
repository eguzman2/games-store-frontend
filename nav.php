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
            <li style="display: none;" id="menu_reports"><a href="reports.php"><i class="fa fa-file-text-o"></i> Reportes</a></li>
            <li style="display: none;" id="menu_my_profile"><a href="profile.php"><i class="fa fa-gear"></i> Mi perfil</a></li>
            <li style="display: none;" id="menu_log_out" onclick="logout()"><a href="#"><i class="fa fa-sign-out"></i> Cerrar Sesión</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right navbar-user">
            <li>
                <form class="navbar-search">
                    <input type="text" placeholder="Busca por categoria" class="form-control">
                </form>
            </li>
            <li class="divider-vertical"></li>
            <li class="dropdown user-dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <span id="user_name"></span><b class="caret"></b></a>
                <ul class="dropdown-menu">
                    <li style="display: none;" id="menu_my_profile_top"><a href="profile.php"><i class="fa fa-gear"></i> Mi perfil</a></li>
                    <li class="divider"></li>
                    <li style="display: none;" onclick="logout()" id="menu_log_out_top"><a href="#"><i class="fa fa-power-off"></i> Cerrar Sesión</a></li>
                    <li id="menu_log_in_top"><a href="login.php"><i class="fa fa-sign-in"></i> Iniciar Sesión</a></li>

                </ul>
            </li>
        </ul>
    </div>
</nav>
<script>
    check_role();
</script>