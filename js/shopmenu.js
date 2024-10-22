// ドロップダウン
$(function() {
  if (window.matchMedia('(min-width: 769px)').matches) {

  $('.js-dropdown').hover(function() {
    $(this).children('.js-dropdown-menu').stop().slideToggle(); 
  });
  $(this).toggleClass("active");
} 
});

$(function() {
  if (window.matchMedia('(max-width: 768px)').matches) {
  $('.js-dropdown').on('click', function(){
    $(this).children('.js-dropdown-menu').stop().slideToggle(); 
  });
  $(this).toggleClass("active");
} 
});


// slick
$(document).ready(function () {
  $('.js-slickMenu').slick({
    slidesToShow: 6,         // 表示するスライド数
    slidesToScroll: 1,       // スライドする数
    infinite: true,          // 無限ループ
    arrows: true,            // 左右ボタンの表示
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ]
  });
});
$(window).on("resize orientationchange", function () {
  $(".js-slickMenu").slick("resize");
});