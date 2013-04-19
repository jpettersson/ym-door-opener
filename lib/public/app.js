$(function(){
  $('.button').on('click', function(){

    $('.button').addClass('loading');

    $.post('/', function() {
      $('.button').removeClass('loading').addClass("open");
      setTimeout(function(){
        $('.button').removeClass('open');
      }, 3000);

    });
  });
});