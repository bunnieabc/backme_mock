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

  $(".number-20").animateNumbers(20, true, 2800);
  $(".number-100").animateNumbers(100, true, 3800);

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




