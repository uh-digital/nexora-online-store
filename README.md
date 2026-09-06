🛍️ Nexora — Online Shopping Store

A modern and interactive browser-based e-commerce website built with HTML5, Tailwind CSS, and Vanilla JavaScript.

Nexora delivers a complete front-end shopping experience where users can browse products, search and filter items, manage their wishlist and shopping cart, authenticate through login and registration interfaces, and proceed through a login-protected checkout flow — all within a clean, responsive, and user-friendly interface.

🌐 Live Demo

👉 "View Live Demo" (https://uh-digital.github.io/nexora-online-store/)

📸 Preview

"Nexora Preview" (assets/screenshot.png)

✨ Features

* 🛍️ Product Browsing
  
  * Displays products in a clean and responsive grid layout.
  * Includes product images, names, categories, ratings, prices, and actions.
  * Provides a dedicated products page for browsing the store.

* 🔎 Product Search
  
  * Allows users to search products by name and relevant product information.
  * Updates product visibility dynamically as the user searches.
  * Supports both desktop and mobile search interfaces.

* 📂 View All Products
  
  * Initially displays a selected number of products.
  * Allows users to reveal additional products with the View All Products button.
  * Provides a Show Less Products option to collapse additional products.

* ❤️ Wishlist System
  
  * Allows users to add and remove products from their wishlist.
  * Displays wishlist items in a dedicated sidebar.
  * Provides a Remove All option with custom confirmation UI.
  * Synchronizes wishlist buttons with the current wishlist state.
  * Saves wishlist data using browser local storage.

* 🛒 Shopping Cart
  
  * Allows users to add products to their shopping cart.
  * Supports increasing and decreasing product quantities.
  * Allows individual products to be removed from the cart.
  * Calculates cart totals and item quantities dynamically.
  * Stores cart data using browser local storage.

* 🔐 Authentication System
  
  * Includes login and registration interfaces.
  * Provides user account interactions through custom authentication UI.
  * Stores demo authentication state using browser local storage.
  * Displays personalized login state after successful authentication.

* 💳 Login-Protected Checkout
  
  * Provides a dedicated checkout experience.
  * Prevents checkout when the user is not logged in.
  * Prompts users to log in before continuing to checkout.
  * Preserves cart contents while authentication is completed.
  * Displays the final checkout total and success notification.
  * Clears the cart after a successful checkout.

* 🔔 Custom Toast Notifications
  
  * Provides custom notification messages for user actions.
  * Supports success, error, warning, and information states.
  * Uses animated toast notifications instead of browser alerts.

* 📱 Responsive Navigation
  
  * Includes a responsive navigation system.
  * Provides a mobile menu for smaller screen sizes.
  * Adapts the store interface across different screen sizes.

* 📩 Newsletter Subscription
  
  * Provides a newsletter subscription form.
  * Gives users feedback after submitting the form.

* 📞 Contact Form
  
  * Includes a contact form for user inquiries.
  * Provides validation and custom feedback notifications.

* 📄 Privacy Policy & Terms
  
  * Includes dedicated Privacy Policy and Terms & Conditions pages.
  * Provides downloadable document functionality.

* 💾 Local Storage Support
  
  * Stores cart, wishlist, and authentication state in the browser.
  * Keeps relevant shopping data available across page refreshes.

🛠️ Tech Stack

Technology| Purpose
HTML5| Page structure, product layouts, navigation, forms, cart, wishlist, authentication, and checkout interfaces
Tailwind CSS| Responsive layouts, typography, styling, spacing, colors, and animations
Vanilla JavaScript| Product interactions, search, cart management, wishlist management, authentication, checkout logic, notifications, form validation, and DOM updates

⚙️ How It Works

1. Open the Nexora online store.
2. Browse the available products.
3. Use the search functionality to find specific products.
4. Add products to the wishlist for later.
5. Add desired products to the shopping cart.
6. Adjust product quantities directly from the cart.
7. Review the cart subtotal and total items.
8. Select Proceed to Checkout.
9. Log in or register when authentication is required.
10. Return to the cart with your selected products preserved.
11. Select Proceed to Checkout again while logged in.
12. Complete the checkout flow and receive a success notification.
13. Cart data is cleared after a successful checkout.
14. Wishlist and relevant shopping data remain available through browser local storage.

🎯 Project Highlights

This project focuses on building a modern browser-based e-commerce experience while implementing:

* Product listing and dynamic rendering
* Product search functionality
* Expandable product grid
* Wishlist management
* Shopping cart management
* Product quantity controls
* Dynamic cart totals
* Login and registration interfaces
* Login-protected checkout flow
* Cart persistence during authentication
* Local storage persistence
* Custom toast notifications
* Custom confirmation dialogs
* Responsive navigation
* Mobile menu functionality
* Newsletter subscription
* Contact form handling
* Privacy policy and terms functionality
* Dynamic DOM manipulation
* Event handling
* Form validation
* Responsive Tailwind CSS design

📂 Project Structure

nexora/
│
├── index.html
├── products.html
├── about.html
├── contact.html
├── privacy.html
├── terms.html
│
├── js/
│   └── script.js
│
├── assets/
│   └── screenshot.png
│
└── README.md

👨‍💻 Author

Developed as a modern front-end e-commerce project using HTML5, Tailwind CSS, and Vanilla JavaScript, with a focus on responsive design, interactive user experiences, browser-based state management, and clean front-end architecture.

---

⭐ If you like this project, consider giving the repository a star!
