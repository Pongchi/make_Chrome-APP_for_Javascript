const h1 = document.querySelector(".hello > h1");


function handleWindowResize() {
    document.body.style.background = "tomato";
}
window.addEventListener("resize", handleWindowResize);