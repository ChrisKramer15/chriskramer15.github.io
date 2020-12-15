// let toggle = document.querySelector('#toggle'),
//     sidebar = document.querySelector('#sidebar');

// toggle.addEventListener('click', function(e) {
//     e.preventDefault();
//     sidebar.classList.toggle('hidden');
// });

let navBtn = document.querySelector("#beginBtn");
let newNav = document.querySelector("#toggle");

navBtn.addEventListener("click", () => {
    newNav.classList.add("show");
});