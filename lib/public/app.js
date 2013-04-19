$(function(){
  $('.button').on('click', function(){
    $('.button').addClass('open');
    setTimeout(function(){
      $('.button').removeClass('open');
    }, 3000);
    $.post('/');
  });
});