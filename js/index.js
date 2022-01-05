$(document).ready(function () {
  $("#lightbtn").click(function () {
    $(this).addClass("dpnone");
    $("#darkbtn").removeClass("dpnone");
    $("body").addClass("dark-mode");
  });
  $("#darkbtn").click(function () {
    $(this).addClass("dpnone");
    $("#lightbtn").removeClass("dpnone");
    $("body").removeClass("dark-mode");
  });

  $(".header_list li").click(function () {
    // var index = $(this).index();
    var submenu = $(this).children("ul");
    submenu.toggleClass("dpnone");
    $(this).mouseleave(function () {
      submenu.addClass("dpnone");
    });
  });

  $(".footer_main").click(function () {
    var submenu = $(this).children("ul");
    var i1 = $(this).children("a").children("i:first-child");
    var i2 = $(this).children("a").children("i:nth-child(2)");
    submenu.toggleClass("dpnone");
    i1.toggleClass("dpnone");
    i2.toggleClass("dpnone");
  });

  $(".footer_relbox").click(function () {
    var submenu = $(this).children("ul");
    submenu.toggleClass("dpnone");
    $(".fa-plus").toggleClass("dpnone");
    $(".fa-times").toggleClass("dpnone");
  });

  var current = document.documentElement.scrollTop || 0;
  document.addEventListener("scroll", function () {
    let documentY = document.documentElement.scrollTop;
    documentY - current >= 0
      ? $("header").addClass("dpnone")
      : $("header").removeClass("dpnone");
    current = documentY; // Update scrollY
  });

  // window.__scrollPosition = $(window).scrollTop();
  // console.log(window.__scrollPosition);
  // document.addEventListener("scroll", function () {
  //   var position = $(window).scrollTop();
  //   var updown = position - window.__scrollPosition >= 0 ? 1 : -1;
  //   console.log(updown);
  //   if (position > 160) {
  //     $("header").addClass("dpnone");
  //   }
  //   if (updown < 0) {
  //     $("header").removeClass("dpnone");
  //   }
  // });
  // document.addEventListener("scroll", function () {
  //   $(".wrap_tit").removeClass("dpnone");
  // });
});
