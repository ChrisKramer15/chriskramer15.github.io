//once intro button is clicked, event listener is activated -- display flex is added to navbar.  Otherwise, navbar is hidden
let navBtn = document.querySelector("#beginBtn");
let newNav = document.querySelector("#toggle");

navBtn.addEventListener("click", () => {
    newNav.classList.add("show");
});