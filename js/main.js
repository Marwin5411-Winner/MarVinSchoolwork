//Toggle Btn Music Player Celia Claire
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
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
