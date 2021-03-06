<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/users_report.js"></script>
</head>
<body onload="loadUsers()">
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <div id = "alert_placeholder"></div>
            <div>
                <div class="col-lg-12">
                    <h1> Reporte de Usuarios <small></small></h1>
                    <hr/>
                </div>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <button onclick="createPDF()" class="btn btn-default btn-lg btn-block">Generar Reporte</button>
                    </div>
                </div>
                </br>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-user"></i> Listado de usuarios </h3>
                            </div>
                            <div class="panel-body" id="list_table_div">
                                <table id="list_table" class="table table-condensed table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Nombre de usuario</th>
                                            <th>Rol</th>
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
