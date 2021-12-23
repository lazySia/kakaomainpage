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

function submenu1() {
  var ul1 = document.getElementById("submenu1");
  var ul2 = document.getElementById("submenu2");
  var ul3 = document.getElementById("submenu3");

  ul1.classList.toggle("dpnone");
  ul2.classList.add("dpnone");
  ul3.classList.add("dpnone");
}

function submenu2() {
  var ul1 = document.getElementById("submenu1");
  var ul2 = document.getElementById("submenu2");
  var ul3 = document.getElementById("submenu3");

  ul2.classList.toggle("dpnone");
  ul1.classList.add("dpnone");
  ul3.classList.add("dpnone");
}

function submenu3() {
  var ul1 = document.getElementById("submenu1");
  var ul2 = document.getElementById("submenu2");
  var ul3 = document.getElementById("submenu3");

  ul3.classList.toggle("dpnone");
  ul1.classList.add("dpnone");
  ul2.classList.add("dpnone");
}
