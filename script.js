// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Cart Toggle
const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');

cartIcon.addEventListener('click', () => {
  cart.classList.add('show');
});

closeCart.addEventListener('click', () => {
  cart.classList.remove('show');
});

// Contact Form Submission (Mock)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  contactForm.reset();
});
