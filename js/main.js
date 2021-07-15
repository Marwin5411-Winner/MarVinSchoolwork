//ประกาศ Let
let tree = document.getElementById("tree");
let grass = document.getElementById("grass");
//เช็ค Browser
var ua = navigator.userAgent.toLowerCase();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert('is a Mobile');
} else {
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {
    } else {
      alert(
        "ต้องใช้ Microsoft Edge และ Google Chrome ในการเปิดเท่านั้นไม่สามารถใช้ Safari ได้ เพื่อใช้ฟีเจอร์ได้ครบคันครับ! จากมาร์วิน"
      );
      window.location.href = "https://www.google.com"; // Safari
    }
  }
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
