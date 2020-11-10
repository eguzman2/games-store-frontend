function loadGames() {
    var body = JSON.stringify({})
    console.log(url_get_videogames);
    fetch(url_get_videogames, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => {
        console.error('Error:', err)
        bootstrap_alert.danger('<strong>A ocurrido un error al conectar con el servidor.</strong> Contacte a soporte tecnico.');
    })
    .then(response => {
        console.log(response);
        if(response.error){
            bootstrap_alert.warning("<strong> No se pudo obtener la informacion del los videojuegos</strong>");
        } else{
            games_str = ""
            for (let game_counter = 0; game_counter < response.length; game_counter++) {
                const element = response[game_counter];
                games_str += "<tr>"
                games_str += "<td>" + element.id + "</td>"
                games_str += "<td>" + element.name + "</td>"
                games_str += "<td>" + element.year + "</td>"
                games_str += "<td>" + element.price + "</td>"
                games_str += "<td>" + element.category1 + "</td>"
                games_str += "<td>" + element.category2 + "</td>"
                games_str += "<td>" + element.category3 + "</td>"
                games_str += "<td>" + element.picture + "</td>"
                games_str += "<td>" + element.banner + "</td>"
                games_str += "<td>" + element.description + "</td>"
                games_str += "</tr>"
            }
            $('#table_content').html(games_str);
        }
    })
}

function createPDF() {
    var sTable = document.getElementById('list_table_div').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 15px Arial;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "#description_col{min-width: 500px;}";
    style = style + "</style>";
    
    var win = window.open('', '', 'height=700,width=900');

    win.document.write('<html><head>');
    win.document.write('<title>Reporte de videojuegos</title>'); 
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);
    win.document.write('</body></html>');

    win.document.close();

    win.print();
}
