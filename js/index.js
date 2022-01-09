$(document).ready(function () {
  var today = new Date();
  var month = today.getMonth();
  var date = today.getDate();
  var day = today.getDay();
  if (day == 0) {
    day = "일요일";
  } else if (day == 1) {
    day = "월요일";
  } else if (day == 2) {
    day = "화요일";
  } else if (day == 3) {
    day = "수요일";
  } else if (day == 4) {
    day = "목요일";
  } else if (day == 5) {
    day = "금요일";
  } else if (day == 6) {
    day = "토요일";
  }

  document.getElementById("tit_txt").innerText = `${
    month + 1
  }월 ${date}일 ${day} 소식입니다`;

  for (var i = 1; i <= 31; i++) {
    if (date == i) {
      document.getElementById("tit_date").classList = `tit_date${i}`;
      document.getElementById("wrap_tit_date").classList = `tit_date${i}`;
    }
  }

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
    if (documentY != 0) {
      $("header").css({ "border-bottom": "1px solid #eee" });
    } else {
      $("header").css({ "border-bottom": 0 });
    }

    if (documentY > 150) {
      $(".wrap_tit").removeClass("dpnone");
    } else {
      $(".wrap_tit").addClass("dpnone");
    }

    if (documentY > 155) {
      $("header").css({ top: "-73px" });
      $(".wrap_tit").css({ top: "-1px" });
    }
    if (documentY - current < 0) {
      $("header").css({ top: 0 });
      $(".wrap_tit").css({ top: "72px" });
    }

    current = documentY; // Update
  });
});
