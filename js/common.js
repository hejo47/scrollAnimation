$(function(){
  let lastPos = 0;
  $(window).scroll(function(){
    let currentPos = $(window).scrollTop();
    if (currentPos > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
    if (lastPos > currentPos) {
      $(".header").css({
        "transform": "translateY(0)",
      });
    } else if (lastPos < currentPos) {
      $(".header").css({
        "transform": "translateY(-100%)",
      });
      $(".header").removeClass("active");
    }
    lastPos = currentPos;
  });
});