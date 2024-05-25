"use strict";

function setMenu() {
    var a = $(window);
    if (a.width() < 1024 && a.width() >= 767) 1 == $("body").hasClass("container") && $("body").addClass("container"), $("#sidebar-scroll").slimScroll({
        destroy: !0
    }), $("body").removeClass("fixed"), $("body").addClass("sidebar-collapse"), $(".sidebar").css("overflow", "visible"), $(".sidebar-menu").css("overflow", "visible"), $(".sidebar-menu").css("height", "auto");
    else if (a.width() < 540 && a.width() < 767) 1 == $("body").hasClass("box-layout") && $("body").removeClass("container"), $(".main-header").css("margin-top", "50px"), $("#sidebar-scroll").slimScroll({
        destroy: !0
    }), $("body").removeClass("fixed"), $("body").addClass("sidebar-collapse"), $(".sidebar").css("overflow", "visible"), $(".sidebar-menu").css("overflow", "visible"), $(".sidebar-menu").css("height", "auto");
    else if (a.width() > 540 && a.width() < 767) 1 == $("body").hasClass("box-layout") && $("body").removeClass("container"), $(".main-header").css("margin-top", "0px"), $("#sidebar-scroll").slimScroll({
        destroy: !0
    }), $("body").removeClass("fixed"), $("body").addClass("sidebar-collapse"), $(".sidebar").css("overflow", "visible"), $(".sidebar-menu").css("overflow", "visible"), $(".sidebar-menu").css("height", "auto");
    else if (a.width() >= 1024) {
        var b = $(window).height() - 70;
        $("#sidebar-scroll").height($(window).height() - 70), $("#sidebar-scroll").slimScroll({
            height: b,
            allowPageScroll: !1,
            wheelStep: 5,
            color: "#000"
        }), $(".main-header").css("margin-top", "0px"), 1 == $("body").hasClass("box-layout") ? ($("body").removeClass("fixed"), $("body").addClass("container")) : $("body").addClass("fixed"), $("body").removeClass("sidebar-collapse"), $("#sidebar-scroll").css("width", "100%"), $(".sidebar").css("overflow", "inherit"), $(".sidebar-menu").css("overflow", "inherit")
    } else $("body").removeClass("sidebar-collapse"), 1 == $("body").hasClass("box-layout") ? ($("body").removeClass("fixed"), $("body").addClass("container")) : $("body").addClass("fixed")
}
$(document).ready(function() {
    $("aside.main-sidebar").height($("body").height() - 50), $(".sidebar-toggle").on("click", function() {
        var a = $(window);
        if (a.width() < 767) setMenu();
        else if (1 == $("body").hasClass("sidebar-collapse")) $("#sidebar-scroll").slimScroll({
            destroy: !0
        }), 1 == $("body").hasClass("box-layout") ? $("body").removeClass("fixed") : ($("body").addClass("fixed"), $("body").addClass("header-fixed")), $(".sidebar").css("overflow", "visible"), $(".sidebar-menu").css("overflow", "visible"), $(".sidebar-menu").css("height", "auto");
        else {
            var b = $(window).height() - 70;
            $("#sidebar-scroll").height($(window).height() - 70), $("#sidebar-scroll").slimScroll({
                height: b,
                allowPageScroll: !1,
                wheelStep: 5,
                color: "#000"
            }), $("body").removeClass("header-fixed"), 1 == $("body").hasClass("box-layout") ? $("body").removeClass("fixed") : $("body").addClass("fixed"), $("#sidebar-scroll").css("width", "100%"), $(".sidebar").css("overflow", "inherit"), $(".sidebar-menu").css("overflow", "inherit")
        }
    })
}), window.addEventListener("load", setMenu, !1), window.addEventListener("resize", setMenu, !1);
