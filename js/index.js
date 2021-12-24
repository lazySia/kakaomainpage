// $(document).ready(function () {
function darkMode() {
  var body = document.body;
  var date = document.getElementsByClassName("tit_date22");
  var lightbtn = document.getElementById("lightbtn");
  var darkbtn = document.getElementById("darkbtn");
  body.classList.toggle("dark-mode");
  date.classList.toggle("dark-mode");
  lightbtn.classList.toggle("dpnone");
  darkbtn.classList.toggle("dpnone");
}
