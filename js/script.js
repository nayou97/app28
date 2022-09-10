
$(function(){
  $(window).load(function() { $('#loading').hide(); });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 30,
      });
  $(".nav_stamp, .main_stamp, .b_stamp").click(function(){
    location.href = "stamp.html";
  });
  $(".nav_coupon, .main_coupon, .b_coupon").click(function(){
    location.href = "coupon.html";
  });
  $(".nav_gift, .main_gift, .b_gift").click(function(){
    location.href = "gift.html";
  });
  $(".nav_order, .main_order, .b_order").click(function(){
    location.href = "order.html";
  });
  $(".nav_del, .main_del, .b_delivery").click(function(){
    location.href = "delivery.html";
  });
});
