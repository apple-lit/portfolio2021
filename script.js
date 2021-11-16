$(function(){
  $('.slider').bxSlider({
    auto: true,
    controls: false,
    pager: false,
    mode: 'fade',
    speed: 2000,
    touchEnabled: false,
    randomStart: true,
    pause:4500
  }
  );

  $('#toggle').on('click', function() {
      $('body').toggleClass('is-open');
    });
});