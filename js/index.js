//ประกาศ Let
let tree = document.getElementById("tree");
let grass = document.getElementById("grass");

//Dynamic Header Scroll Event Listener
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  tree.style.left = -(value * 0.75) + "px";
  grass.style.top = value * 0.5 + "px";
});
