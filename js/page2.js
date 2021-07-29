window.addEventListener("scroll", function(){
    let sky = document.getElementById("sky");
    let value = window.scrollY;
    sky.style.left = (value * 0.5) + "px";
})