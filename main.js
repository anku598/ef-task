import './assets/scss/style.scss';


document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = item.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);

      // Close all other open dropdowns
      dropdowns.forEach((dropdown) => {
        if (dropdown !== targetDropdown) {
          dropdown.classList.remove("show-dropdown");
        }
      });

      // Toggle the clicked dropdown
      targetDropdown.classList.toggle("show-dropdown");

      // Add active class to clicked nav-item
      navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".search-icon");
  const closeIcon = document.querySelector(".close-icon");
  const searchInput = document.getElementById("search-input");

  searchIcon.addEventListener("click", function () {
    searchInput.classList.toggle("expanded-input");
    searchIcon.classList.add("hidden");
    closeIcon.classList.add("visible");
  });

  closeIcon.addEventListener("click", function () {
    searchInput.classList.remove("expanded-input");
    searchIcon.classList.remove("hidden");
    closeIcon.classList.remove("visible");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".nav-items");

  burgerMenu.addEventListener("click", function () {
    mobileNav.classList.toggle("active-nav");
  });
});