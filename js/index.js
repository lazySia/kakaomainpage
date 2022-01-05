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

  $(".header_list li").mouseover(function () {
    var index = $(this).index();
    if (index != 1) {
      $(".header_list li ul").eq(index).removeClass("dpnone");
      $(this).mouseleave(function () {
        $(".header_list li ul").eq(index).addClass("dpnone");
      });
    }
  });
});
