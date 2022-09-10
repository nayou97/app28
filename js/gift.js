$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        breakpoints: {
          120: {
            slidesPerView: 2.5,
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        }
      });

  $(".menu_box ul li").click(function(){
    $(location).attr("href", "gift_sub1.html");
  });
  $(".cart, .payment").click(function(){
    $(location).attr("href", "gift_sub2.html");
  });
});