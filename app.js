const hello = document.querySelector(".hello > h1");

function handleHelloClick() {
    console.log("title was clicked!");
}

hello.addEventListener("click", handleHelloClick);