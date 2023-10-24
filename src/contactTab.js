const contactTab = document.createElement("div");
contactTab.classList.add("tab");

contactTab.innerHTML(
  `
  <h2>Contact</h2>
  <div>Thank you for visiting Calabrese online! We're delighted to know that you're interested in experiencing our culinary 
  traditions and family atmosphere. If you have any questions, would like to make a reservation, or wish to discuss any special 
  dietary requirements, we're just a message or call away.  Please feel free to reach out using the contact information below.</div>
  <div><span class="bold-text">E-Mail:</span>  info@calabrese.com</div>
  <div><span class="bold-text">Phone:</span> 867-5309</div>
  <div><span class="bold-text">Location:</span> 123 Main Street, Philadelphia PA, 123456</div>
  <div><span class="bold-text">Hours:</span>
    <ul>
      <li><span class="bold-text">Sun:</span> 11am - 8pm</li>
      <li><span class="bold-text">Mon:</span> Closed</li>
      <li><span class="bold-text">Tues - Thurs:</span> 11am - 7pm</li>
      <li><span class="bold-text">Fri & Sat:</span> 11am - 9pm</li>
    </ul>
  </div>
  `)
    export default contactTab;