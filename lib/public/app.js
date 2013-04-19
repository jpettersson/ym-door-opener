$(function(){
  $('.button').on('click', function(){
    
    if ($('.button').hasClass('open') || $('.button').hasClass('loading')) return;
    
    $('.button').addClass('loading');

    $.post('/open', function() {
      
      $('.button').removeClass('loading').addClass("open");
      
      setTimeout(function(){
        $('.button').removeClass('open');
      }, 3000);

    });
  });
});