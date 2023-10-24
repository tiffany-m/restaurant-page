import PastaPic from "/src/images/pasta.jpg";
import SaladPic from "/src/images/salad.jpg";
import CannoliPic from "/src/images/cannoli.jpg";

const menuTab = document.createElement("div");
menuTab.classList.add("tab");
menuTab.innerHTML =
  `
  <h2>Discover our Menu</h2>
  <div class="intro">
    Our carefully crafted menu showcases the essence of Italian tradition, featuring specialties like our homemade pasta with red sauce and meatballs. Dive in and find your new favorite dish!
  </div>
  <div class="menu-item">
    <div class="menu-title">Pasta with Red Sauce and Meatballs <span class="menu-price"> - $29.99</span></div>
    <div class="menu-description">Choose between tender spaghetti or spiral rotini, both perfectly paired with our house-special red sauce and succulent meatballs. A rich blend of heirloom tomatoes and aromatic herbs elevate this classic dish to an unforgettable Italian culinary experience.</div>
    
    <img src="${PastaPic}" alt="Pasta with Red Sauce and Meatballs">
  </div>
  <div class="menu-item">
    <div class="menu-title">Italian Salad<span class="menu-price"> - $19.99</span></div>
    <div class="menu-description">Crisp romaine lettuce is tossed with crunchy croutons, juicy tomatoes, tangy pepperoncini, and ripe black olives, then sprinkled with freshly grated Parmesan. A celebration of textures and flavors, this Italian Salad is the perfect start to your meal.</div>
    
    <img src="${SaladPic}" alt="Italian Salad">
  </div>
  <div class="menu-item">
    <div class="menu-title">Cannoli with Rocotta Cheese <span class="menu-price"> - $4.99 Rocotta || $3.50 Choco/Vanilla</span></div>
    <div class="menu-description">Indulge in our iconic Cannoli—crisp pastry shells filled to the brim with creamy ricotta cheese. For a twist, opt for chocolate or vanilla cream. Each bite is a heavenly balance of texture and flavor, making it the perfect ending to your meal.</div>
    <img src="${CannoliPic}" alt="Cannoli with Rocotta Cheese">
  </div>
  `;

  export default menuTab;