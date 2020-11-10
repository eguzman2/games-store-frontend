function submitData(csv){
    var table = "";
    var data = csv.data;
    var game_count = 0;
	 
    document.getElementById("list_table_div").setAttribute('style', '');
    console.log(data);
	for(i=1;i<data.length;i++){
        game_count += 1;
		table+= "<tr>";
		var row = data[i];
		var cells = row.join(",").split(",");
        create_game(cells, game_count);
        // adding to table
		for(j=0;j<cells.length;j++){
			table+= "<td>";
			table+= cells[j].substr(0,100);
			table+= "</td>";
		}
        table+= "</tr>";
        $("#table_content").html(table);
    }
    if (game_count > 1){
        bootstrap_alert.success("<strong> Se han agregado los registros satisfactoriamente</strong>");
    }
}

function create_game(data, counter) {
    var request_data = {
        'name': data[0],
        'year': data[1],
        'price': data[2],
        'category1': data[3],
        'category2': data[4],
        'category3': data[5],
        'picture': data[6],
        'banner': data[7],
        'description': data[8]
    }
    if (request_data['name'] == ""){
        return false;
    }
    var body = JSON.stringify(request_data)
    console.log(body);
    console.log(url_create_videogame);
    fetch(url_create_videogame, {
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
            bootstrap_alert.warning("<strong> No se pudo agregar el registro: " + response.message + "</strong>");
        } else{
            console.log("Juego " + counter + " agregado.")
        }
    })
}
function load() {
	$('#file').parse({
		config: {
			delimiter: "auto",
			complete: submitData,
		},
		before: function(file, inputElem)
		{
			console.log("Leyendo...", file);
		},
		error: function(err, file)
		{
            console.log("ERROR:", err, file);
            bootstrap_alert.danger('<strong>A ocurrido un error al leer el archivo csv.</strong>');
		},
		complete: function()
		{
			console.log("Archivos leidos");
		}
	});
}