//creating and inputing nav bar when intro button is clicked
let navBar = document.querySelector("#beginBtn");
let aboutSection = document.querySelector("#about");

navBar.addEventListener("click", () => {
    let newNav = document.createElement("nav");
    let unorderedList = document.createElement("ul");
    let homeLi = document.createElement("li");
    let aboutLi = document.createElement("li");
    let projLi = document.createElement("li");
    let contactLi = document.createElement("li");
    aboutSection.prepend(newNav);
    newNav.prepend(unorderedList);
    unorderedList.append(homeLi, aboutLi, projLi, contactLi);
    homeLi.textContent = "Home";
    aboutLi.textContent = "About";
    projLi.textContent = "Projects";
    contactLi.textContent = "Contacts";
});

