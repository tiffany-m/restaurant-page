import './style.css';
import navContainer from "./headerButtons";
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
header.appendChild(navContainer);

content.appendChild(header);

//Main
const tabContent = document.createElement("div");
tabContent.setAttribute("id", "main-content")

content.appendChild(tabContent);
tabContent.appendChild(homeTab);

function loadHomePage() {
    tabContent.replaceChild(homeTab, currentTab);
}

function loadContactPage() {
    tabContent.replaceChild(contactTab, currentTab);
}

function loadMenuPage() {
    tabContent.replaceChild(menuTab, currentTab);
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
