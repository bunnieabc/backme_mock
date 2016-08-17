$(document).ready(function() {
  //loading
  $(window).load(function() {
    $("#loading").delay(600).fadeOut();
  });
  var progress = 0;
  $("img").load(function() {
    progress += 100 / $("img").length;
    var percent = Math.round(progress) + "%";
    $("#loading .txt").text(percent);
    $("#loading .ld-bar").css("width", percent);
  });
  //loading END

 

  $('.dark-cover').hover(function(){
    $(this).children().fadeIn(300);
  }, function(){
    $(this).children().fadeOut(300);
  })

  $(".modal-img-sm-row .modal-img-sm").click(function(){
    $(this).attr('id');
    var bg = $(this).css('background-image');
    $(".modal-img-md").css("background-image",bg);
    $(".modal-img-sm-row .modal-img-sm").css("opacity","0.6");
    $(this).css("opacity","1");
  })
  console.log($(".modal-block").height());
  $(".cart").click(function(){
    if (!$(".sidebar").hasClass("moveout")){
      $(".sidebar").animate({
        right: "0%",
      }, 300);
      $(".sidebar").addClass("moveout");
    }
    else{
      $(".sidebar").animate({
        right: "-33%",
      }, 300);
      $(".sidebar").removeClass("moveout");
    }
  });

  $('.item-detail .item-detail-btn').click(function(){
    // 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
    $(this).next('.item-detail .item-detail-hide').slideToggle();
    if($(this).children().hasClass("fa-caret-right"))
      $(this).children().removeClass("fa-caret-right").addClass("fa-caret-down");
    else
      $(this).children().removeClass("fa-caret-down").addClass("fa-caret-right");
  }).siblings('.item-detail .item-detail-hide').hide();

  $(".detail-icon").click(function(){
    if($(".modal-block").hasClass("move"))
    {
      $(".modal-block").css({left:"0%"},300);
      $(".modal-block").removeClass("move");
      $(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
      $(".modal-block .modal-content-md .btn-cart")
        .html("<span class='into'>進入購物車</span><span class='icon'><i class='fa fa-angle-right'></i></span>")
    }
  })

  $(".cart-icon").click(function(){
    if(!$(".modal-block").hasClass("move"))
    {
      $(".modal-block").css({left:"-59%"},300);
      $(".modal-block").addClass("move");
      //$(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
      $(".modal-block .modal-content-md .btn-cart").addClass("btn-cart2")
        .html("<span class='icon2'><i class='fa fa-angle-left'></i></span> <span class='back'>回到圖片</span><span class='space'></span> ")
    }
  })

  $(".btn-cart").click(function(){
    if(!$(".modal-block").hasClass("move"))
    {
      $(".modal-block").animate({left:"-59%"},300);
      $(".modal-block").addClass("move");
      $(".modal-block .modal-content-md .btn-cart").addClass("btn-cart2")
        .html("<span class='icon2'><i class='fa fa-angle-left'></i></span> <span class='back'>回到圖片</span><span class='space'></span> ")
    }
    else{
      $(".modal-block").animate({left:"0%"},300);
      $(".modal-block").removeClass("move");
      $(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
      $(".modal-block .modal-content-md .btn-cart")
        .html("<span class='into'>進入購物車</span><span class='icon'><i class='fa fa-angle-right'></i></span>")
    }
  })
});

//reveal效果
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);


// 視差滾動
$(window).load(function() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
});




