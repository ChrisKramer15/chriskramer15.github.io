//creating and inputing nav bar when intro button is clicked
let navBar = document.querySelector("#beginBtn");
let aboutSection = document.querySelector("#about");

navBar.addEventListener("click", () => {
    let newNav = document.createElement("nav");
    let newUl = document.createElement("ul");
    let newLi1 = document.createElement("li");
    let newLi2 = document.createElement("li");
    aboutSection.prepend(newNav);
    newLi1.textContent = "Home";
    newLi2.textContent = "About";
    newNav.prepend(newUl);
    newUl.append(newLi1);
    newUl.append(newLi2);
});
