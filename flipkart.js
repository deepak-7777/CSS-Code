// flipkart.js

// ======== Search ========
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

function performSearch() {
    let query = searchInput.value.trim();
    if (query.length > 0) {
        alert("Searching for: " + query);
    } else {
        alert("Please type something to search!");
    }
}
searchIcon.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
});

// ======== Login Modal ========
const loginBtn = document.querySelector(".login");
const body = document.querySelector("body");

// Modal Create
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>Login</h2>
      <input type="email" id="email" placeholder="Enter Email" required />
      <input type="password" id="password" placeholder="Enter Password" required />
      <button id="loginSubmit">Login</button>
  </div>
`;
body.appendChild(modal);

const closeBtn = modal.querySelector(".close-btn");
const loginSubmit = modal.querySelector("#loginSubmit");

loginBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

loginSubmit.addEventListener("click", () => {
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#password").value;
    if (email && pass) {
        alert("Welcome " + email);
        modal.style.display = "none";
    } else {
        alert("Please enter email and password!");
    }
});

// ======== Cart System ========
let cart = [];
const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let cartItems = cart.map((item, i) => `${i + 1}. ${item}`).join("\n");
        alert("🛒 Your Cart:\n" + cartItems + "\n\n(To remove item, reload for now!)");
    }
});

// Add product to cart when clicked
const offerCards = document.querySelectorAll(".shop-section2 .box12");
offerCards.forEach((card) => {
    card.addEventListener("click", () => {
        let product = card.querySelector("p").innerText;
        cart.push(product);
        alert(product + " added to cart ✅");
    });
});

// ======== Become a Seller ========
document.querySelector(".sell").addEventListener("click", () => {
    alert("Redirecting to Become a Seller page...");
    window.open("https://seller.flipkart.com", "_blank");
});

// ======== Category Boxes ========
const categoryBoxes = document.querySelectorAll(".shop-section .box");
categoryBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        let category = box.innerText.trim();
        alert("You clicked on category: " + category);
    });
});

// ======== Big Banner Image ========
const bigImage = document.querySelector(".big-image");
bigImage.addEventListener("click", () => {
    const messages = [
        "Big Sale Coming Soon!",
        "Festive Offers are Live!",
        "Don't miss the exclusive deals!",
        "Shop more, Save more!"
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
});

// ======== Footer Links ========
const footerLinks = document.querySelectorAll("footer ul a");
footerLinks.forEach((link) => {
    link.addEventListener("click", () => {
        alert("You clicked: " + link.innerText);
    });
});

// ======== Dot Menu ========
document.querySelector(".dot").addEventListener("click", () => {
    alert("More options will appear soon...");
});

// ======== Modal CSS (inject) ========
const style = document.createElement("style");
style.innerHTML = `
.modal {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}
.modal-content input {
  padding: 8px;
  font-size: 1rem;
}
.modal-content button {
  padding: 10px;
  background: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.close-btn {
  position: absolute;
  top: 20px; right: 25px;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}
`;
document.head.appendChild(style);
