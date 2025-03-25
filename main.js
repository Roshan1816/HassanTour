// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.querySelector("i").classList.toggle("fa-times");
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      mobileMenuBtn.querySelector("i").classList.remove("fa-times");
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Hero Slider
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-nav .prev");
  const nextBtn = document.querySelector(".slider-nav .next");
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto slide change every 5 seconds
  setInterval(nextSlide, 5000);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
// For Stay Page - Filter functionality
function setupStayFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      const stayCards = document.querySelectorAll(".stay-card");

      stayCards.forEach((card) => {
        if (filterValue === "all") {
          card.style.display = "block";
        } else {
          if (card.getAttribute("data-category").includes(filterValue)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
}

// For Gallery Page - Filter functionality
function setupGalleryFilters() {
  const filterButtons = document.querySelectorAll(
    ".gallery-filter .filter-btn"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      const galleryItems = document.querySelectorAll(".gallery-item");

      galleryItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block";
        } else {
          if (item.getAttribute("data-category") === filterValue) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
}

// For FAQ Page - Accordion functionality
function setupFAQAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      this.classList.toggle("active");
      const answer = this.nextElementSibling;

      if (this.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        this.querySelector("i").classList.replace(
          "fa-chevron-down",
          "fa-chevron-up"
        );
      } else {
        answer.style.maxHeight = 0;
        this.querySelector("i").classList.replace(
          "fa-chevron-up",
          "fa-chevron-down"
        );
      }
    });
  });
}

// Initialize page-specific functions when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  // Common functions (from previous code)

  // Page-specific initializations
  if (document.querySelector(".stay-grid")) {
    setupStayFilters();
  }

  if (document.querySelector(".gallery-grid")) {
    setupGalleryFilters();
  }

  if (document.querySelector(".faq-container")) {
    setupFAQAccordion();
  }

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }
});
