
$(function(){
    $(window).load(function() { $('#loading').hide(); });
    $(".ham").click(function(){
        $("nav").fadeIn();
    });
    $(".close").click(function(){
        $("nav").fadeOut();
    });
    $(".header_t img, .b_home").click(function(){
        $(location).attr("href", "index.html");
    });

    
    $(".nav_stamp, .b_stamp").click(function(){
        location.href = "stamp.html";
      });
      $(".nav_coupon, .b_coupon").click(function(){
        location.href = "coupon.html";
      });
      $(".nav_gift, .b_gift").click(function(){
        location.href = "gift.html";
      });
      $(".nav_order, .b_order").click(function(){
        location.href = "order.html";
      });
      $(".nav_del, .b_delivery").click(function(){
        location.href = "delivery.html";
      });


});