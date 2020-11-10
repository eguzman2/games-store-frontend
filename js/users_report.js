function loadUsers() {
    var body = JSON.stringify({})
    console.log(url_get_users);
    fetch(url_get_users, {
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
            bootstrap_alert.warning("<strong> No se pudo obtener la informacion del los usuarios</strong>");
        } else{
            table_row = ""
            for (let counter = 0; counter < response.length; counter++) {
                const element = response[counter];
                table_row += "<tr>"
                table_row += "<td>" + element.id + "</td>"
                table_row += "<td>" + element.first_name + "</td>"
                table_row += "<td>" + element.last_name + "</td>"
                table_row += "<td>" + element.username + "</td>"
                table_row += "<td>" + getRole(element.user_type) + "</td>"
                table_row += "</tr>"
            }
            $('#table_content').html(table_row);
        }
    })
}

function getRole(user_type) {
    if (user_type == '1'){
        return 'Administrador';
    } else {
        return 'Cliente';
    }
}

function createPDF() {
    var sTable = document.getElementById('list_table_div').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Arial;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    var win = window.open('', '', 'height=700,width=900');

    win.document.write('<html><head>');
    win.document.write('<title>Reporte de Usuarios</title>'); 
    win.document.write(style);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);
    win.document.write('</body></html>');

    win.document.close();

    win.print();
}