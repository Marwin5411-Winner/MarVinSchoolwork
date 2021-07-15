//ประกาศ Let
let tree = document.getElementById("tree");
let grass = document.getElementById("grass");
var isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
//เช็ค Browser
window.desktopcheck = function () {
  var check = false;
  if (window.innerWidth > 768) {
    check = true;
  }
  return check;
};
var ua = navigator.userAgent;
if (window.desktopcheck()) {
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {
    } else {
      alert(
        "ต้องใช้ Microsoft Edge และ Google Chrome ในการเปิดเท่านั้นไม่สามารถใช้ Safari ได้ เพื่อใช้ฟีเจอร์ได้ครบคันครับ! จากมาร์วิน"
      );
      window.location.href = "https://www.google.com"; // Safari
    }
  }
} else {
  alert("modile");
}
//Dynamic Header Scroll Event Listener
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  tree.style.left = -(value * 0.75) + "px";
  grass.style.top = value * 0.5 + "px";
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
//Toggle Btn Music Player Celia Claire
document.getElementById("musicbtn").onclick = function musicplayer() {
  let music = document.getElementById("music");
  if (music.style.display === "none") {
    music.style.display = "block";
  } else {
    music.style.display = "none";
  }
};
//Set Volume
let music = document.getElementById("music");
music.volume = 0.05;

document.getElementById("suggestBtn").onclick = function suggestBtn() {
  let sugest = document.getElementById("music-player");
  let suggestBtn = document.getElementById("suggestBtn");
  let music = document.getElementById("music");
  if (sugest.style.display === "none") {
    sugest.style.display = "block";
  } else {
    sugest.style.display = "none";
    music.style.display = "none";
  }
};
