/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    var $email = $("#email");

    $email.keyup(function () {
        var $el = $(this);
        var val = $el.val().trim();
        if (val !== "") {
            if (validateEmail(val)) {
                $("#error").hide();
                $("#ok").show();
            } else {
                $("#ok").hide();
                $("#error").show();
            }
        } else {
            $("#ok, #error").hide();
        }
    });

    $email.keyup();
});

