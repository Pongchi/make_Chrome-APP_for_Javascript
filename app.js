const hello = document.querySelector(".hello > h1");

function handleMouseEnter() {
    hello.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    hello.innerText = "Mouse is gone!";
}

hello.addEventListener("mouseenter", handleMouseEnter);
hello.addEventListener("mouseleave", handleMouseLeave);