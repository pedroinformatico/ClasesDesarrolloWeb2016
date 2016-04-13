/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    var valores = [
        ["usuario1", "nombre1", "apellido1"],
        ["usuario2", "nombre2", "apellido2"],
        ["usuario3", "nombre3", "apellido3"],
        ["usuario4", "nombre4", "apellido4"],
        ["usuario5", "nombre5", "apellido5"],
        ["usuario6", "nombre6", "apellido6"]
    ];

    var $superTabla = $(".super-tabla");
    var init = function () {
        var tbody = "";
        for (var i = 0; i < valores.length; i++) {
            var user = valores[i];
            tbody += '<tr >\n\
            <td>' + user[0] + '</td>\n\
            <td >' + user[1] + '</td>\n\
            <td>' + user[2] + '</td>\n\
            </tr>';
//            tbody += '<tr class="usuario">\n\
//            <td class="usuario">' + user[0] + '</td>\n\
//            <td class="nombre">' + user[1] + '</td>\n\
//            <td class="apellido">' + user[2] + '</td>\n\
//            </tr>';
        }
        $superTabla.find("tbody").html(tbody);

    };

    $superTabla.on("click", 'tbody > tr', function (e) {
        e.preventDefault();
        var $el = $(this);
        var valores = $el.find("td");
        for (var i = 0; i < valores.length; i++) {
            var valor = valores[i];
            console.log($(valor).html());
        }
        console.log(valores)
//        var tabla = $(".super-tabla");
//        tabla = $el.closest("table");
//        tabla = $superTabla;
//        console.log($el.find(".usuario").html());
//        console.log($el.find(".nombre").html());
//        console.log($el.find(".apellido").html());
    });

    init();

});


