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
    // $(this).mouseleave(function () {
    //   submenu.addClass("dpnone");
    // });
    i1.toggleClass("dpnone");
    i2.toggleClass("dpnone");
  });

  $(".footer_relbox").click(function () {
    var submenu = $(this).children("ul");
    submenu.toggleClass("dpnone");
    $(".fa-plus").toggleClass("dpnone");
    $(".fa-times").toggleClass("dpnone");
  });
});
