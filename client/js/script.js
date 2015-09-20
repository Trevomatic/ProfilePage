$(document).ready(function(){

  $('.link').on('click', function(e){
    e.preventDefault();
    target = $(this).attr('data');
    $(target).animatescroll({padding:40});
  });

});