let burger = document.querySelector(".navbar__hamburger");
console.log(burger);

burger.addEventListener("click", displayMenu);

function displayMenu() {
    let menu = document.querySelector(".popup");
    menu.classList.toggle("popup--visible");
    burger.classList.toggle("navbar__hamburger--translucent");
}