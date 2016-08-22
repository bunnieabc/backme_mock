$(document).ready(function() {
  //loading
  //loading END
  var w = window.innerWidth;
  var h = window.innerHeight;
  //console.log("test2");
  //default test


  
  $('.purchase').click(function(){
    if(w<=992){
      $(this).children('.purchase-detail').slideToggle();
    if($(this).children("purchase-wrap").children(".purchase_icon").children("i").hasClass("fa-angle-down"))
      $(this).children("purchase-wrap").children(".purchase_icon").children("i").removeClass("fa-angle-down").addClass("fa-angle-up");
    else
      $(this).children("purchase-wrap").children(".purchase_icon").children("i").removeClass("fa-angle-up").addClass("fa-angle-down");  
    }
    // 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
  }).children('.purchase-detail').hide();

  //test data
  var test_data = ["<h4>反正我就是一些拉哩拉扎的介紹</h4>我是一個介紹<br>我是介紹的朋友<br>我是朋友的朋友<br>",
    "<h4>我是商品名稱我是商品名稱</h4><p>我是一些詳細內容來著</p>","<h4>倪好安安我是湯匙</h4><p>我是一些詳細內容來著</p>"];
  
  $("#p0").click(function(){
      $(".part2").html(test_data[0]);
  });
  $("#p1").click(function(){
      $(".part2").html(test_data[1]);
  });
  $("#p2").click(function(){
      $(".part2").html(test_data[2]);
  });

});

//reveal效果





