// Hamburger menu

// variables
let button = document.querySelector("#button-js");
let openClose = document.querySelector("#menu-list-js");
let icon = document.querySelector("#button-icon-js");

// Eventlistener
button.addEventListener("click", hamburgerMenu);
openClose.addEventListener("click", hamburgerMenu)

// 
function hamburgerMenu() {
    // add or remove the class "active" to the menu-list
    openClose.classList.toggle("active");
    // if menu-list has the class "active" then change button-icon to bi-x
    if (openClose.classList === "active") {
        icon.classList.toggle("bi-x");
        // else return the orignal button-icon   
    } else {
        icon.classList.toggle("bi-x");
    }
}