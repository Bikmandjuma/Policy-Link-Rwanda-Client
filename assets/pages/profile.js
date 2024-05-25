  'use strict';
 $(document).ready(function() {
 $('#date').bootstrapMaterialDatePicker({
            time: false,
            clearButton: true
        });


    var progression1 = 0;
    var progression2 = 0;
    var progression3 = 0;
    var progression4 = 0;
    var progression5 = 0;
    var progress = setInterval(function()
    {

      $('.progress .faq-text1').text(progression1 + '%');
      $('.progress .faq-text1').css({'left':progression1+'%'});
      $('.progress .faq-text1').css({'top':'-20px'});
      $('.progress .faq-bar1').css({'width':progression1+'%'});

      if(progression1 == 70) {
        clearInterval(progress);

      } else
      progression1 += 1;

    }, 100);

    var progress1 = setInterval(function()
    {
      $('.progress .faq-text2').text(progression2 + '%');
      $('.progress .faq-text2').css({'left':progression2+'%'});
      $('.progress .faq-text2').css({'top':'-20px'});
      $('.progress .faq-bar2').css({'width':progression2+'%'});
      if(progression2 == 85) {
        clearInterval(progress1);

      } else
      progression2 += 1;

    }, 100);
    var progress2 = setInterval(function()
    {
      $('.progress .faq-text3').text(progression3 + '%');
      $('.progress .faq-text3').css({'left':progression3+'%'});
      $('.progress .faq-text3').css({'top':'-20px'});
      $('.progress .faq-bar3').css({'width':progression3+'%'});
      if(progression3 == 50) {
        clearInterval(progress2);

      } else
      progression3 += 1;

    }, 100);
    var progress3 = setInterval(function()
    {
      $('.progress .faq-text4').text(progression4 + '%');
      $('.progress .faq-text4').css({'left':progression4+'%'});
      $('.progress .faq-text4').css({'top':'-20px'});
      $('.progress .faq-bar4').css({'width':progression4+'%'});
      if(progression4 == 95) {
        clearInterval(progress3);

      } else
      progression4 += 1;

    }, 100);
    var progress4 = setInterval(function()
    {
      $('.progress .faq-text5').text(progression5 + '%');
      $('.progress .faq-text5').css({'left':progression5+'%'});
      $('.progress .faq-text5').css({'top':'-20px'});
      $('.progress .faq-bar5').css({'width':progression5+'%'});
      if(progression5 == 65) {
        clearInterval(progress4);

      } else
      progression5 += 1;

    }, 100);



  $( function() {

    var icons = {
      header: "icofont icofont-plus",
      activeHeader: "icofont icofont-minus"
    };
    $("#question-open" ).accordion({
      heightStyle: "content",
      icons: icons
    });

    $( "#member-open" ).accordion({
      heightStyle: "content",
      icons: icons
    });



  if($(".accordion-msg").attr('aria-expanded') == 'true'){
   $(".accordion-msg").addClass("scale_active");
 }
 else{
   $(".accordion-msg").removeClass("scale_active");
 }
});

 //    Edit information
  $('#edit-cancel').on('click',function(){
  
     var c=$('#edit-btn').find( "i" );
   c.removeClass('icofont-close');
      c.addClass('icofont-edit');
    $('.view-info').show();
    $('.edit-info').hide();

  });

  $('.edit-info').hide();


$('#edit-btn').on('click',function(){
  var b=$(this).find( "i" );
    var edit_class=b.attr('class');
    if(edit_class=='icofont icofont-edit'){
      b.removeClass('icofont-edit');
      b.addClass('icofont-close');
      $('.view-info').hide();
      $('.edit-info').show();
    }
    else{
     b.removeClass('icofont-close');
      b.addClass('icofont-edit');
      $('.view-info').show();
      $('.edit-info').hide();
    }
  });

  //    experience information
  $('#exp-cancel').on('click',function(){
var c=$('#btn-exp').find( "i" );
   c.removeClass('icofont-close');
      c.addClass('icofont-edit');
    $('.view-exp').show();
    $('.edit-exp').hide();
  });

  $('.edit-exp').hide();
  $('#btn-exp').on('click',function(){

     var c=$(this).find( "i" );
    var edit_class=c.attr('class');
    if(edit_class=='icofont icofont-edit'){
      c.removeClass('icofont-edit');
      c.addClass('icofont-close');
      $('.view-exp').hide();
      $('.edit-exp').show();
    }
    else{
      c.removeClass('icofont-close');
      c.addClass('icofont-edit');
      $('.view-exp').show();
      $('.edit-exp').hide();
    }
  });

  //    sducation information
  $('#edu-cancel').on('click',function(){
var c=$('#edu-btn').find( "i" );
   c.removeClass('icofont-close');
      c.addClass('icofont-edit');
    $('.view-edu').show();
    $('.edit-edu').hide();
   
  });

  $('.edit-edu').hide();
  $('#edu-btn').on('click',function(){

     var d=$(this).find( "i" );
    var edit_class=d.attr('class');
    if(edit_class=='icofont icofont-edit'){
      d.removeClass('icofont-edit');
      d.addClass('icofont-close');
      $('.view-edu').hide();
      $('.edit-edu').show();
    }
    else{
      d.removeClass('icofont-close');
      d.addClass('icofont-edit');
      $('.view-edu').show();
      $('.edit-edu').hide();
    }
  });
});
