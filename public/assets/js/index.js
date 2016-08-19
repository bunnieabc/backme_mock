$(document).ready(function() {
  //loading
  //loading END
  var w = window.innerWidth;
  var h = window.innerHeight;
  //console.log("test2");
  //default test
  var test_num = 0;
  $(".num").html(test_num);

  $('.dark-cover').hover(function(){
    if(w>992){
      $(this).children().fadeIn(300);
    }
  }, function(){
    if(w>992){
      $(this).children().fadeOut(300);
    }
  })
  if(w<992){
    $(".item").attr("data-toggle","modal");
    $(".item").attr("data-target","#myModal");

  }

  $(".modal-img-sm-row .modal-img-sm").click(function(){
    $(this).attr('id');
    var bg = $(this).css('background-image');
    $(".modal-img-md").css("background-image",bg);
    $(".modal-img-sm-row .modal-img-sm").css("opacity","0.6");
    $(this).css("opacity","1");
  })
  //sidebar part
  $(".cart").click(function(){
    if(w>992){
      if (!$(".sidebar").hasClass("moveout")){
        $(".sidebar").animate({
          right: "0%",
        }, 300);
        $(".sidebar").addClass("moveout");
        $(".sidebar-dark-cover").fadeIn(300);
      }
      else{
        $(".sidebar").animate({
          right: "-33%",
        }, 300);
        $(".sidebar").removeClass("moveout");
        $(".sidebar-dark-cover").fadeOut(300);
      }
    }
    else{
      if (!$(".sidebar").hasClass("moveout")){
        $(".sidebar").animate({
          right: "0%",
        }, 300);
        $(".sidebar").addClass("moveout");
        $(".sidebar-dark-cover").fadeIn(300);
      }
      else{
        $(".sidebar").animate({
          right: "-95%",
        }, 300);
        $(".sidebar").removeClass("moveout");
        $(".sidebar-dark-cover").fadeOut(300);
      }
    }
  });

  $(".sidebar-dark-cover").click(function(){
    if ($(".sidebar").hasClass("moveout")){
      $(".sidebar").animate({
        right: "-33%",
      }, 300);
      $(".sidebar").removeClass("moveout");
      $(".sidebar-dark-cover").fadeOut(300);
    }
  });

  //toggle
  $('.item-detail .item-detail-btn').click(function(){
    // 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
    $(this).next('.item-detail .item-detail-hide').slideToggle();
    if($(this).children().hasClass("fa-caret-right"))
      $(this).children().removeClass("fa-caret-right").addClass("fa-caret-down");
    else
      $(this).children().removeClass("fa-caret-down").addClass("fa-caret-right");
  }).siblings('.item-detail .item-detail-hide').hide();

  //modal part
  $(".detail-icon").click(function(){
    var str ="<span class='back hidden-lg hidden-md' data-dismiss='modal'>回到商場</span><span class='transform-btn'><span class='into'>進入購物車</span><span class='icon'><i class='fa fa-angle-right'></i></span></span>"
    if($(".modal-block").hasClass("move"))
    {
      $(".modal-block").css({left:"0%"},300);
      $(".modal-block").removeClass("move");
      $(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
      $(".modal-block .modal-content-md .btn-cart").html(str);
    }
  })

  $(".cart-icon").click(function(){
    var str = "<span class='transform-btn'><span class='icon2'><i class='fa fa-angle-left'></i></span><span class='back'>回到圖片</span></span><span class='space'></span> ";
    if(!$(".modal-block").hasClass("move"))
    {
      $(".modal-block").css({left:"-59%"},300);
      $(".modal-block").addClass("move");
      //$(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
      $(".modal-block .modal-content-md .btn-cart").addClass("btn-cart2").html(str);
    }
  })

  $(document).on("click", ".transform-btn", function(){
    //console.log("I dont know why");
    if(w>992)
    {
      if(!$(".modal-block").hasClass("move"))
      {
        var str = "<span class='transform-btn'><span class='icon2'><i class='fa fa-angle-left'></i></span><span class='back'>回到圖片</span></span><span class='space'></span> "
        $(".modal-block").animate({left:"-59%"},300);
        $(".modal-block").addClass("move");
        $(".modal-block .modal-content-md .btn-cart").addClass("btn-cart2")
          .html(str)
      }
      else{
        //alert("2");
        var str ="<span class='back hidden-lg hidden-md' data-dismiss='modal'>回到商場</span><span class='transform-btn'><span class='into'>進入購物車</span><span class='icon'><i class='fa fa-angle-right'></i></span></span>"
        $(".modal-block").animate({left:"0%"},300);
        $(".modal-block").removeClass("move");
        $(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
        $(".modal-block .modal-content-md .btn-cart").html(str)
      }
    }
    else
    {
      var str = "<span class='transform-btn'><span class='icon2'><i class='fa fa-angle-left'></i></span><span class='back'>回到圖片</span></span><span class='space'></span> "
      if(!$(".modal-block").hasClass("move"))
      {
        $(".modal-block").animate({left:"-100%"},300);
        $(".modal-block").addClass("move");
        $(".modal-block .modal-content-md .btn-cart").addClass("btn-cart2")
          .html(str)
      }
      else{
        var str ="<span class='back hidden-lg hidden-md' data-dismiss='modal'>回到商場</span><span class='transform-btn'><span class='into'>進入購物車</span><span class='icon'><i class='fa fa-angle-right'></i></span></span>"
        $(".modal-block").animate({left:"0%"},300);
        $(".modal-block").removeClass("move");
        $(".modal-block .modal-content-md .btn-cart").removeClass("btn-cart2")
        $(".modal-block .modal-content-md .btn-cart").html(str)
      }
    }
  })

  $(".modal-content-md2 .goto").click(function(){
    
      setTimeout(function(){
        test_num = test_num +1;
        $(".num").html(test_num);
        $(".num").addClass("num-animation"); 
        setTimeout(function(){
          $(".num").removeClass("num-animation");
        },1500)  
      },200);
  })

  $(".item-bottom #test1").click(function(){
    var item_content = $(this).parent();
    var item = item_content.parent().parent();
    item.remove();
    console.log(item);
    item.next().remove();

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




