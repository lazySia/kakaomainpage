function changeTitle() {
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

  document.getElementById("txt_tit").innerText = `${
    month + 1
  }월 ${date}일 ${day} 소식입니다`;

  var tit_date;

  for (var i = 1; i <= 31; i++) {
    if (i == date) {
    }
  }
}
