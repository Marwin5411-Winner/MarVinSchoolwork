//ประกาศ Let
let tree = document.getElementById("tree");
let grass = document.getElementById("grass");
//
let source = "audio/music.mp3";
let audio = new Audio();
audio.addEventListener("load", function() {
  audio.play();
}, true);
audio.src = source;
audio.autoplay = true;
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
music.volume = 0.1;

document.getElementById("suggestBtn").onclick = function suggestBtn() {
  let sugest = document.getElementById("music-player");
  let music = document.getElementById("music");
  if (sugest.style.display === "none") {
    sugest.style.display = "block";
  } else {
    sugest.style.display = "none";
    music.style.display = "none";
  }
};
