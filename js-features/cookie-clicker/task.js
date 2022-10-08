let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let counter = 0;

cookie.onclick = function() {
  counter++;
  clickerCounter.textContent = counter;
  cookie.width = counter % 2 == 0 ? 250 : 180;
}