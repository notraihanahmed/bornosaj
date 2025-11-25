document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const searchBtn = document.getElementById('search-btn');
    const searchBoxContainer = document.getElementById('search-box-container');
    const searchInput = document.querySelector('.search-input');

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinksMobile = document.getElementById('nav-links-mobile');

    // --- Function: Toggle Search Box ---
    searchBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop click from bubbling to document
        
        // Toggle active class on search box
        searchBoxContainer.classList.toggle('active');
        
        // If opening, focus the input field automatically
        if (searchBoxContainer.classList.contains('active')) {
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }
        
        // If the hamburger menu is currently open, close it
        if (navLinksMobile.classList.contains('active')) {
            navLinksMobile.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });

    // --- Function: Toggle Hamburger Menu ---
    hamburgerBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop click from bubbling to document
        
        // Toggle active class on the button (for animation) and the menu container
        hamburgerBtn.classList.toggle('active');
        navLinksMobile.classList.toggle('active');
        
        // If the search box is currently open, close it
        if (searchBoxContainer.classList.contains('active')) {
            searchBoxContainer.classList.remove('active');
        }
    });

    // --- Function: Close menus when clicking anywhere else on the page ---
    document.addEventListener('click', function(event) {
        // Check if the click happened *outside* the search button AND search box
        const isClickInsideSearch = searchBtn.contains(event.target) || searchBoxContainer.contains(event.target);
        if (!isClickInsideSearch && searchBoxContainer.classList.contains('active')) {
            searchBoxContainer.classList.remove('active');
        }

        // Check if the click happened *outside* the hamburger button AND mobile menu
        const isClickInsideHamburger = hamburgerBtn.contains(event.target) || navLinksMobile.contains(event.target);
        if (!isClickInsideHamburger && navLinksMobile.classList.contains('active')) {
            navLinksMobile.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });

    // --- Function: Close mobile menu automatically when a link inside it is clicked ---
    navLinksMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksMobile.classList.contains('active')) {
                navLinksMobile.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        });
    });
});
