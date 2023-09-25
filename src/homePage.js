export default function loadHomePage() {
    const content = document.getElementById("content");

    // Header
    const header = document.createElement('header');
    header.setAttribute("id", "header");
    content.appendChild(header);
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    headerTitle.textContent = "Calabrese";
    header.appendChild(headerTitle);

    //Main
    const main = document.createElement("div");
    main.setAttribute("id", "main")

    const homeTab = document.createElement("div");
    homeTab.classList.add("home", "active");
    homeTab.setAttribute("data-tab", "homeContent")
    homeTab.innerHTML =
        `
    <div class="p-tag">Welcome to Calabrese!  Where Every Noodle Tells a Story.</div>
    <p>
        At Calabrese Italian tradition and culinary excellence come to life right
        in the heart of Philadelphia. Founded by the Calabrese family, our restaurant is proud to be in its third
        generation of ownership, carrying forward a legacy of mouthwatering recipes and an unyielding commitment to quality.
    </p>
    <p>
        <div class="p-tag">A Family Legacy of Flavor</div>
        What sets us apart? It's our dedication to homemade cooking. Everything that graces your plate is made from scratch,
        using time-honored recipes that have been passed down through generations. Our kitchen starts its day with the freshest
        ingredients, many of which are sourced directly from our on-premise garden. This ensures that you taste the peak of
        flavor in every bite.
    </p>
    <p>
        <div class="p-tag">Signature Dishes</div>
        When it comes to specialties, our pasta with red sauce and meatballs is a must-try. The sauce is a rich blend of
        heirloom tomatoes, aromatic herbs, and a touch of family secret that gives it an unforgettable character. Paired with
        perfectly cooked pasta and succulent meatballs, its a meal that captures the very essence of Italian cuisine.
    </p>
    <p>
        <div class="p-tag">A Sweet Ending to Your Meal</div>
        And what Italian dining experience would be complete without dessert? Our cannoli are the talk of the town, and for a
        good reason. The crisp shell and sumptuous ricotta cheese filling are a testament to the art of Italian pastry. Each
        cannoli is a masterpiece, delicately flavored and generously filled, making it the perfect way to end your gastronomic
        journey with us.
    </p>
    <p>
        <div class="p-tag">Join Us</div>
        We invite you to experience the rich flavors and warm hospitality that have made [Your Restaurant's Name] a beloved
        destination for food lovers. Benvenuto!
    </p>
    `

    main.appendChild(homeTab);
    content.appendChild(main);
}