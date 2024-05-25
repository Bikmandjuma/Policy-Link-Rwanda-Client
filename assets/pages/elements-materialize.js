  'use strict';
 $(document).ready(function() {  
          
    $("input:file").change(function (e,v){
      var pathArray = $(this).val().split('\\');
      var img_name=pathArray[pathArray.length - 1];
      $(this).parent().children('.md-form-file').val(img_name);
      if(img_name)
        $(this).parent().children('.md-label-file').hide();
      else
        $(this).parent().children('.md-label-file').show();
    });


          $(".js-example-basic-multiple").select2();
// dropdown
// Dropdown Js
 
    var closeSelectTimeout;

    function hideMaterialList(parent){
        parent.css({
            'overflow': 'hidden'
        }).removeClass('isOpen');
        clearTimeout(closeSelectTimeout);
        closeSelectTimeout = setTimeout(function(){
            parent.parent().css({
                'z-index': 0
            });
        }, 200);
    }
    $(document.body).on('mousedown', '.materialBtn, .md-select li', function(event){
            if(parseFloat($(this).css('opacity')) > 0 && $(document).width() >= 1008){
                var maxWidthHeight = Math.max($(this).width(), $(this).height());
                if($(this).find("b.drop").length == 0 || $(this).find("b.drop").css('opacity') != 1) {
                    // .drop opacity is 1 when it's hidden...css animations
                    drop = $('<b class="drop" style="width:'+ maxWidthHeight +'px;height:'+ maxWidthHeight +'px;"></b>').prependTo(this);
                }
                else{
                    $(this).find("b.drop").each(function(){
                        if($(this).css('opacity') == 1){
                            drop = $(this).removeClass("animate");
                            return;
                        }
                    })
                }
                x = event.pageX - drop.width()/2 - $(this).offset().left;
                y = event.pageY - drop.height()/2 - $(this).offset().top;
                drop.css({
                    top: y,
                    left: x
                }).addClass("animate");
            }
    });
    $(document.body).on('dragstart', '.materialBtn, .md-select li', function(e){
        e.preventDefault();
    })

    var selectTimeout;
    $(document.body).on('click', '.md-select li', function() {
        var parent = $(this).parent();
        if(!parent.hasClass('disabled')){
        parent.children('li').removeAttr('data-selected');
        $(this).attr('data-selected', 'true');
        clearTimeout(selectTimeout);
        if(parent.hasClass('isOpen')){
            if(parent.parent().hasClass('required')){
                if(parent.children('[data-selected]').attr('data-value')){
                    parent.parents('.materialSelect').removeClass('error empty');
                }
                else{
                    parent.parents('.materialSelect').addClass('error empty');
                }
            }
            hideMaterialList($('.md-select'));
        }
        else{
            var pos = Math.max(($('li[data-selected]', parent).index() - 2) * 48, 0);
            parent.addClass('isOpen');
            parent.parent().css('z-index', '999');
            // if($(document).width() >= 1008){
            //     var i = 1;
            //     selectTimeout = setInterval(function(){
            //         i++;
            //         //parent.scrollTo(pos, 50);
            //         if(i == 2){
            //             parent.css('overflow', 'auto');
            //         }
            //         if(i >= 4){
            //             clearTimeout(selectTimeout);
            //         }
            //     }, 100);
            // }
            // else{
                parent.css('overflow', 'auto').scrollTo(pos, 0);
            //}
        }
    }
 

    $('.materialInput input').on('change input verify', function(){
        if($(this).attr('required') == 'true'){
            if($(this).val().trim().length){
                $(this).parent().removeClass('error empty');
            }
            else{
                $(this).parent().addClass('error empty');
                $(this).val('');
            }
        }
        else{
            if($(this).val().trim().length){
                $(this).parent().removeClass('empty');
            }
            else{
                $(this).parent().addClass('empty');
            }
        }
    });

    $(document.body).on('click', function(e) {
        var clicked;
        if($(e.target).hasClass('materialSelect')){
            clicked = $(e.target).find('.md-select').first();
        }
        else if($(e.target).hasClass('md-select')){
            clicked = $(e.target);
        }
        else if($(e.target).parent().hasClass('md-select')){
            clicked = $(e.target).parent();
        }

        if($(e.target).hasClass('materialSelect') || $(e.target).hasClass('md-select') || $(e.target).parent().hasClass('md-select')){
            hideMaterialList($('.md-select').not(clicked));
        }
        else{
            if($('.md-select').hasClass('isOpen')){
                hideMaterialList($('.md-select'));
            }
        }
    });
    hideMaterialList($('.md-select'));
});
});