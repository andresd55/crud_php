/**
 * Created by andres on 19/01/2018.
 */

$(function(){
    initForm();
    getData();

});

function getData() {
        var url = 'server/getUsers.php';
        $.ajax({
                url: url,
                dataType: "json",
                cache: false,
                processData: false,
                contentType: false,
                type: 'GET',
                success:function(data) {
                    if (data.msg === "OK") {
                        fillTable(JSON.parse(data.users))
                    }else {
                        $('#imprime').html("<span style='color:white;'> " + data.msg + "</span>");
                    }
                },
            error: function(){
                alert("error en la comunicación con el servidor");
            }
        });
}

function fillTable(users) {
    var html = "";
    html +=    "<table class = 'table-fill'>";
    html += "<thead><tr>";
    html += "<th>Cedula</th>";
    html += "<th>Nombre</th>";
    html += "<th>Apellido</th>";
    html += "<th>Email</th>";
    html += "<th>Edad</th>";
    html += "<th id='tittle_edit'>Editar</th>";
    html += "<th id='tittle_delete'>Eliminar</th></tr></thead>";
    html += "<tbody class = 'table-hover'>";
    // console.log(users[0]);
    $.each(users, function( index, value ) {
        if(index != "msg"){
            console.log( index + ": " + value );
            console.log( value );
            console.log( value["apellido"] );
            html += "<tr id = '" + value["cedula"] + "'>";
            html += "<td class='cedula'> " + value["cedula"] + " </td>";
            html += "<td class='nombre'> " + value["nombre"] + " </td>";
            html += "<td class='apellido'> " + value["apellido"] + "  </td>";
            html += "<td class='email'> " + value["email"] + "  </td>";
            html += "<td class='fecha_nacimiento'> " + value["fecha_nacimiento"] + " </td>";
            html += "<td class='image_edit'>";
            html += "<img src = 'client/img/editar.png' class='edit' border = '0' name=''/>";
            html += "</td>";
            html += "<td class='image_delete'>";
            html += "<img src = 'client/img/eliminar.png' class='delete' border = '0' name='' />";
            html += "</td>";
            html += "</tr>";
        }
    });


    html += "</tbody></table>";

    $('#imprime').html(html);
}

function addUser(){
    var url = 'server/addUser.php';
    $.ajax({
        url: url,
        dataType: "json",
        data: {
            'id':  $('#id').val(),
            'firstName':  $('#firstName').val(),
            'lastName':  $('#lastName').val(),
            'email':  $('#email').val(),
            'birthday':  $('#birthday').val(),
        },
        type: 'POST',
        success:function(data) {
            if (data.msg) {
                alert("usuario creado correctamente");
                getData();
            }else {
                alert("error al crear el nuevo usuario");
            }
        },
        error: function(){
            alert("error en la comunicación con el servidor");
        }
    }).done(function () {
        $('#id').val("");
        $('#firstName').val("");
        $('#lastName').val("");
        $('#email').val("");
        $('#birthday').val("");
    });
}

function deleteUser(cedula) {
    var url = 'server/deleteUser.php';
    $.ajax({
        url: url,
        dataType: "json",
        data: {
            'id':  cedula
        },
        type: 'POST',
        success:function(data) {
            if (data.msg) {
                alert("el usuario se ha eliminado correctamente");
                getData();
            }else {
                alert("error al eliminar el usuario");
            }
        },
        error: function(){
            alert("error en la comunicación con el servidor");
        }
    }).done(function () {
    });
}

function updateUser(row){
    var url = 'server/updateUser.php';
    $.ajax({
        url: url,
        dataType: "json",
        data: {
            'id':  $(row).attr("id"),
            'firstName':  $(row.find('.nombre > input')).val(),
            'lastName':  $(row.find('.apellido > input')).val(),
            'email':  $(row.find('.email > input')).val(),
            'birthday':  $(row.find('.fecha_nacimiento > input')).val(),
        },
        type: 'POST',
        success:function(data) {
            if (data.msg) {
                alert("usuario actualizado correctamente");
                getData();
            }else {
                alert("error al actualizar el usuario");
            }
        },
        error: function(){
            alert("error en la comunicación con el servidor");
        }
    });
}

function initForm(){
    $('form').submit(function(event){
        event.preventDefault();
        console.log($('#identifica').val());
        addUser();
    });

    $('#imprime').on('click', '.delete', function () {
        if(confirm("Esta seguro de eliminar este usuario?")){
            var row = $(this).closest('tr');
            deleteUser($(row).attr("id"));
        }
    });

    $('#imprime').on('click', '.edit', function () {
        $('#tittle_edit').html("Aceptar");
        $('#tittle_delete').html("Cancelar");

        $( "tbody > tr" ).each(function( index ) {
            resetRow($(this));
        });

        var row = $(this).closest('tr');
        row.find('.nombre').html("<input type='text' value='"+ row.find('.nombre').html() +"'></input>");
        row.find('.apellido').html("<input type='text' value='"+ row.find('.apellido').html() +"'></input>");
        row.find('.email').html("<input type='text' value='"+ row.find('.email').html() +"'></input>");
        row.find('.fecha_nacimiento').html("<input type='text' value='"+ row.find('.fecha_nacimiento').html() +"'></input>");
        row.find('.image_edit').html("<img src = 'client/img/accept.png' class='update' border = '0' name=''/>");
        row.find('.image_delete').html("<img src = 'client/img/cancel.png' class='cancel' border = '0' name=''/>");
    });

    $('#imprime').on('click', '.cancel', function () {
        var row = $(this).closest('tr');
        resetRow(row);
    });

    $('#imprime').on('click', '.update', function () {
        var row = $(this).closest('tr');
        updateUser(row);
        resetRow(row);
    });
}

function resetRow(row) {
    if($(row.find('.nombre > input')).length > 0){
        $('#tittle_edit').html("Editar");
        $('#tittle_delete').html("Eliminar");

        row.find('.nombre').html($(row.find('.nombre > input')).val());
        row.find('.apellido').html($(row.find('.apellido > input')).val());
        row.find('.email').html($(row.find('.email > input')).val());
        row.find('.fecha_nacimiento').html($(row.find('.fecha_nacimiento > input')).val());
        row.find('.image_edit').html("<img src = 'client/img/editar.png' class='edit' border = '0' name=''/>");
        row.find('.image_delete').html("<img src = 'client/img/eliminar.png' class='delete' border = '0' name=''/>");
    }
}