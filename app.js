const h1 = document.querySelector("div.hello:first-child h1.sexy-font");


function handleClick() {
    this.classList.toggle("clicked");
}

h1.addEventListener("click", handleClick);