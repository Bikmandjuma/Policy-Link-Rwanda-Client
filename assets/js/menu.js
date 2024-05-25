/*Template Name: Quantum Able Bootstrap 4 Admin Template
 Author: Codedthemes
 Email: support@phopenixcoded.net
 File: menu.js
 */
"use strict";
$(document).ready(function() {
    /*chat box scroll*/
    $('aside.main-sidebar').height($('body').height()-50);



    $('.sidebar-toggle').on('click',function(){
        var $window = $(window);
        if($window.width() < 767){
            setMenu();

        }
        else{
            if($("body").hasClass("sidebar-collapse") == true){

                $("#sidebar-scroll").slimScroll({destroy: true});

                if($("body").hasClass("box-layout") == true){
                    $("body").removeClass("fixed");
            	}
                else{
                    $("body").addClass("fixed");
            	$("body").addClass("header-fixed");
                }
                $(".sidebar").css('overflow','visible');
                $(".sidebar-menu").css('overflow','visible');
                $(".sidebar-menu").css('height','auto');

            }
            else{
                var a= $(window).height()-70;
                $('#sidebar-scroll').height($(window).height()-70);
                $("#sidebar-scroll").slimScroll({
                    height: a,
                    allowPageScroll: false,
                    wheelStep:5,
                    color: '#000'
                });

                $("body").removeClass("header-fixed");
              if($("body").hasClass("box-layout") == true){
        $("body").removeClass("fixed");
	}
    else{
        $("body").addClass("fixed");
    }
                $("#sidebar-scroll").css('width','100%');
                $(".sidebar").css('overflow','inherit');
                $(".sidebar-menu").css('overflow','inherit');
            }
        }
    });
});

window.addEventListener('load', setMenu, false);
window.addEventListener('resize', setMenu, false);
function setMenu(){

    var $window = $(window);
    if ($window.width() < 1024 && $window.width() >= 767) {
         if($("body").hasClass("container") == true){
            $("body").addClass("container");
        }
        $("#sidebar-scroll").slimScroll({destroy: true});
        $("body").removeClass("fixed");
        $("body").addClass("sidebar-collapse");
        $(".sidebar").css('overflow','visible');
        $(".sidebar-menu").css('overflow','visible');
        $(".sidebar-menu").css('height','auto');
    }
    else if($window.width() < 540 && $window.width() < 767){
        if($("body").hasClass("box-layout")== true){
            $("body").removeClass("container");
        }
        $(".main-header").css('margin-top','50px');
        $("#sidebar-scroll").slimScroll({destroy: true});
        $("body").removeClass("fixed");
        $("body").addClass("sidebar-collapse");
        $(".sidebar").css('overflow','visible');
        $(".sidebar-menu").css('overflow','visible');
        $(".sidebar-menu").css('height','auto');
    }
    else if($window.width() > 540 && $window.width() < 767){
         if($("body").hasClass("box-layout") == true){
            $("body").removeClass("container");
        }
        $(".main-header").css('margin-top','0px');
        $("#sidebar-scroll").slimScroll({destroy: true});
        $("body").removeClass("fixed");
        $("body").addClass("sidebar-collapse");
        $(".sidebar").css('overflow','visible');
        $(".sidebar-menu").css('overflow','visible');
        $(".sidebar-menu").css('height','auto');
    }
    else if($window.width() >= 1024){
        var a= $(window).height()-70;
        $('#sidebar-scroll').height($(window).height()-70);
        $("#sidebar-scroll").slimScroll({
            height: a,
            allowPageScroll: false,
            wheelStep:5,
            color: '#000'
        });
        $(".main-header").css('margin-top','0px');
    	if($("body").hasClass("box-layout") == true){
            $("body").removeClass("fixed");
            $("body").addClass("container");
    	}
        else{
            $("body").addClass("fixed");
        }
        $("body").removeClass("sidebar-collapse");
        $("#sidebar-scroll").css('width','100%');
        $(".sidebar").css('overflow','inherit');
        $(".sidebar-menu").css('overflow','inherit');
    }
    else{

        $("body").removeClass("sidebar-collapse");
       if($("body").hasClass("box-layout") == true){
            $("body").removeClass("fixed");
              $("body").addClass("container");
    	}
        else{
            $("body").addClass("fixed");
        }
    }
}
