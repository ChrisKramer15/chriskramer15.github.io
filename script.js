let navBtn = document.querySelector("#beginBtn");
let newNav = document.querySelector("#toggle");

navBtn.addEventListener("click", () => {
    newNav.classList.add("show");
});