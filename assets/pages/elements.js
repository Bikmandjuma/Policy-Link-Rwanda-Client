"use strict";
$(document).ready(function(){
    $(".md-form-control").each(function() {
        $(this).parent().append('<span class="md-line"></span>');
    });
    $(".md-form-control").change(function() {
        if ($(this).val() == "") {
            $(this).removeClass("md-valid");
        } else {
            $(this).addClass("md-valid");
        }
    });

});