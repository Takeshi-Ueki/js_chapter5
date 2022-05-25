$(function () {
  $('.box1').slideDown(function (){
    $('.box1').delay(1000).css({
      'background-color': '#0000ff',
      'height': '500px'
    }).slideUp(1500);
  })
  // $('.box1').hide();
});
