  'use strict';
 $(document).ready(function() {  
 $('.icon-list-demo div').on('click',function(){
      var font_class= ($(this).children('.zmdi').attr('class'));
      $('#myModal').modal('show');
      $('#icon').removeClass();
      $('#icon').addClass(font_class);
      $('#icon').addClass('fa-lg');
      $('#name').val(font_class);
      $('#code').val('<i class="'+font_class+'"></i>');
  });
});