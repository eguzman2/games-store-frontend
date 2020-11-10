<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/add_game.js"></script>
</head>
<body>
    <div id="wrapper">
        <?php include('nav.php');?>
        <div>
            <div id = "alert_placeholder"></div>
            <!-- <div class="text-center">
                    <h1>Completed Projects</h1>
            </div> -->
            <div class="container">
                <div class="col-lg-12">
                    <h1> Agregar Videojuego <small></small></h1>
                    <hr/>
                </div>
                <div>
                    <div id="name-input-div" class="form-group">
                        <label for="name" class="col-md-2">
                            Nombre:
                        </label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="name">
                            <label id="name-error-label" class="control-label" for="inputError"></label>
                        </div>
                    </div>        
                    <div>
                        <label for="year" class="col-md-2">
                            Año:
                        </label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="year">
                        </div>
                    </div>
                    <div id="price-input-div" class="form-group">
                        <label for="price" class="col-md-2">
                            Precio:
                        </label>
                        <div class="col-md-9">
                            <input type="number" class="form-control" id="price">
                            <label id="price-error-label" class="control-label" for="inputError"></label>
                        </div>
                    </div>
                    <div>
                        <label for="category_1" class="col-md-2">
                            Categoria 1:
                        </label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="category_1">
                        </div>
                    </div>
                    <div>
                        <label for="category_2" class="col-md-2">
                            Categoria 2:
                        </label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="category_2">
                        </div>
                    </div>
                    <div>
                        <label for="category_3" class="col-md-2">
                            Categoria 3:
                        </label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="category_3">
                            <label></label>
                        </div>
                    </div>
                    <div id="picture-input-div" class="form-group">
                        <label for="picture" class="col-md-2">
                            Imagen:
                        </label>
                        <div class="col-md-9">
                            <input type="url" class="form-control" id="picture" placeholder="Ingrese url de la imagen">
                            <label id="picture-error-label" class="control-label" for="inputError"></label>
                        </div>
                    </div>
                    <div id="banner-input-div" class="form-group">
                        <label for="picture" class="col-md-2">
                            Banner:
                        </label>
                        <div class="col-md-9">
                            <input type="url" class="form-control" id="banner" placeholder="Ingrese url del banner">
                            <label id="banner-error-label" class="control-label" for="inputError"></label>
                        </div>
                    </div>
                    <div>
                        <label for="description" class="col-md-2">
                            Descripción:
                        </label>
                        <div class="col-md-9">
                            <textarea class="form-control" id="description"></textarea>
                            <label></label>
                        </div>
                    </div>
                    <div class="form">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-9">
                            <button onclick="create_videogame()" type="submit" class="form-control btn btn-large btn-info">
                                Crear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
