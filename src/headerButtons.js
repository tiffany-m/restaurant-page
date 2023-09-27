const homeButton = document.createElement("button");
homeButton.setAttribute("id", "home-link");
homeButton.classList.add('nav-link');
homeButton.textContent = "Home";

const contactButton = document.createElement("button");
contactButton.setAttribute("id", "contact-link");
contactButton.classList.add('nav-link');
contactButton.textContent = "Contact";

const menuButton = document.createElement("button");
menuButton.setAttribute("id", "menu-link");
menuButton.classList.add('nav-link');
menuButton.textContent = "menu";


export {homeButton, contactButton, menuButton};