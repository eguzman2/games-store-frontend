<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once('head.php');?>
    <script type="text/javascript" src="js/videogame.js"></script>
</head>
<body onload="videogame()">
    <div id="wrapper">
        <?php include('nav.php');?>
        <div id="page-wrapper">
            <!-- <div class="text-center">
                    <h1>Completed Projects</h1> background-image: url(https://i.ytimg.com/vi/YHcP490H1J8/maxresdefault.jpg)
            </div> -->
            <div id='banner'></div>
            <div class="container">
            <input type="hidden" id="game_id"/>
            <div id = "alert_placeholder"></div>
                
                <div class="col-lg-12">
                    <h1><span id="name"></span> <small id="year"></small></h1>
                <hr/>
                </div>
                <div id="container" class="row">
                    <div class="col-lg-6">
                        <div class="well" id="image">
                        </div>  
                    </div>
                    <div class="col-lg-6">
                        <div id="categories"></div>
                        <div class="row">
                            <div class="col-md-5">
                                <strong><h3 id="price"></hr></strong>
                            </div>
                            <div class="col-md-7" id="div_add_button" style="display: none;">
                                <h4> <button id="add_button" class="btn btn-primary btn-lg btn-block">Agregar a mi biblioteca</button> </h4>
                            </div>
                        </div>  
                        <br/>
                        <p id="description"></p>
                    </div>
                </div>
                <div class="row">
                    <h2><span>Comentarios</span> </h2>
                    <div class="col-xs-12" id="comments"></div>
                    
                <div class="row" id="leave_comment" style="display: none;">
                    <div class="well">
                        <h4>Deja un comentario:</h4>
                        <div class="form-group">
                            <textarea id="text_comment" class="form-control" rows="3"></textarea>
                        </div>
                        <button onclick="addComment()" class="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
