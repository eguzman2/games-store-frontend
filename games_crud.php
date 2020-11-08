<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/games_crud.js"></script>
</head>
<body onload="loadGames()">
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <div id = "alert_placeholder"></div>
            <!-- <div class="text-center">
                    <h1>Completed Projects</h1>
            </div> -->
            <div class="container">
                <div class="col-lg-12">
                    <h1> Gestión de Videojuegos <small><small></h1>
                    <hr/>
                </div>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <button type="button" class="btn btn-default btn-lg btn-block">Agregar videojuego</button>
                    </div>
                </div>
                </br>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-gamepad"></i> Listado de videojuegos </h3>
                            </div>
                            <div class="panel-body">
                                <table id="list_table" class="table table-condensed table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Categorías</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="table_content">
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
