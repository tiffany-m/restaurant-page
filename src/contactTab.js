const contactTab = document.createElement("div");
contactTab.classList.add("tag");

contactTab.setHTML(
    `
      <div class="contact-tab">
        <h1>Contact</h1>
        <div>Thank you for visiting Calabrese online! We're delighted to know that you're interested in experiencing our culinary traditions and family atmosphere. If you have any questions, would like to make a reservation, or wish to discuss any special dietary requirements, we're just a message or call away. Your dining experience is important to us, and we're eager to assist you in any way we can. Please feel free to reach out using the contact information or form below.</div>
        <div>email:  info@calabrese.com</div>
        <div>phone: 867-5309</div>
        <div>location: 123 Main Street, Philadelphia PA, 123456</div>
        <div>hours:
          <ul>
            <li>Sun: 11am - 8pm</li>
            <li>Mon: Closed</li>
            <li>Tues - Thurs: 11am - 7pm</li>
            <li>Fri & Sat: 11am - 9pm</li>
          </ul>
        </div>
      </div>
    `)
    export default contactTab;