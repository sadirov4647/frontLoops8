const elButtons = document.querySelectorAll(".btn");
const text = document.querySelector(".content-text");
const hide = document.querySelector(".side-menu");
const elBlack = document.querySelector(".black-layer");
const elContent = document.querySelector(".content-text");
const whiteBtn = document.querySelector(".content button");
whiteBtn.addEventListener("click", function () {
    hide.classList.remove("show");
    elBlack.classList.remove("show");
});


elButtons.forEach((elbtn) => {
    elbtn.addEventListener("click", function () {
        let atrr = elbtn.getAttribute("data-btn-type");
        if (atrr === "search") {
            hide.classList.toggle("show");
            elBlack.classList.toggle("show");
            elContent.textContent = "Whoa! You found me!";
            whiteBtn.textContent = "Hide Back";
        }
        if (atrr === "run") {
            hide.classList.toggle("show");
            elBlack.classList.toggle("show");
            elContent.textContent = "Please don't run!";
            whiteBtn.textContent = "Close";
        }
    })

})