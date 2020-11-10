<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/comments_report.js"></script>
</head>
<body onload="loadVideoGames()">
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <div id = "alert_placeholder"></div>
            <div>
                <div class="col-lg-12">
                    <h1> Reporte de Comentarios <small></small></h1>
                    <hr/>
                </div>
                <div class="row">
                    <div class="col-sm-10 col-sm-offset-1">
                        <select id="games_select" class="form-control"></select>
                    </div>
                </div>
                </br>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title"><i class="fa fa-comment"></i> Listado de comentarios </h3>
                            </div>
                            <div class="panel-body" id="list_table_div">
                                <table id="list_table" class="table table-condensed table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre de usuario</th>
                                            <th>Comentario</th>
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
