<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/search.js"></script>
</head>
<body onload="search()">
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <div id = "alert_placeholder"></div>
            <div class="container">
                <div class="col-lg-12">
                    <h1> Resultados de la busqueda por categoría <small id="search_text_header"></small></h1>
                    <hr/>
                </div>
                <div id="container" class="row">
                </div>
            </div>
        </div>
    </div>
</body>
</html>
