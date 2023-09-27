import './style.css';
import {homeButton, contactButton, menuButton} from "./headerButtons";
import homeTab from "./homeTab";
import contactTab from "./contactTab";
import menuTab from "./menuTab";

const content = document.getElementById("content");
let currentTab = homeTab;

// Header
const header = document.createElement('div');
header.setAttribute("id", "header");
// Header Title
const headerTitle = document.createElement('div');
headerTitle.classList.add('header-title');
headerTitle.textContent = "Calabrese";
header.appendChild(headerTitle);
// Buttons
header.appendChild(homeButton);
header.appendChild(contactButton);
header.appendChild(menuButton);

content.appendChild(header);

//Main
const mainContent = document.createElement("div");
mainContent.setAttribute("id", "main-content")

content.appendChild(mainContent);
mainContent.appendChild(homeTab);

function loadHomePage() {
    mainContent.replaceChild(homeTab, currentTab);
}

function loadContactPage() {
    mainContent.replaceChild(contactTab, currentTab);
}

function loadMenuPage() {
    mainContent.replaceChild(menuTab, currentTab);
}

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", () => {
        if (link.getAttribute("id") == "home-link") {
            loadHomePage();
            currentTab = homeTab;
        } else if (link.getAttribute("id") == "contact-link") {
            loadContactPage();
            currentTab = contactTab;
        } else {
            loadMenuPage();
            currentTab = menuTab
        }

    })
})