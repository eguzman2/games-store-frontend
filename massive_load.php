<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/papaparse.min.js"></script>
    <script type="text/javascript" src="js/massive_load.js"></script>
</head>
<body>
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <div id = "alert_placeholder"></div>
            <!-- <div class="text-center">
                    <h1>Completed Projects</h1>
            </div> -->
            <div class="container">
                <div class="col-lg-12">
                    <h1> Carga masiva de videojuegos <small></small></h1>
                    <hr/>
                    <p id="info"></p>
                </div>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <div id="file-input-div" class="form-group">
                            <label>Selecciona un archivo .csv</label>
                            <input id="file"  accept=".csv" type="file">
                            <label id="file-error-label" class="control-label" for="inputError"></label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <button onclick="load()" class="btn btn-default btn-block">Cargar videojuegos</button>
                    </div>
                </div>
                </br>
                <div class="row" id="list_table_div" style="display: none;">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-gamepad"></i> Videjuegos detectados </h3>
                            </div>
                            <div class="panel-body">
                                <table id="list_table" class="table table-condensed table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Año</th>
                                        <th>Precio</th>
                                        <th>Categoría 1</th>
                                        <th>Categoría 2</th>
                                        <th>Categoría 3</th>
                                        <th>Imagen</th>
                                        <th>Banner</th>
                                        <th>Descripción</th>
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
