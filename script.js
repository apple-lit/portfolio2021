$(function(){
  $('.slider').bxSlider({
    auto: true,
    controls: false,
    pager: false,
    mode: 'fade'
  }
  );

  $('#toggle').on('click', function() {
      $('body').toggleClass('is-open');
    });
});