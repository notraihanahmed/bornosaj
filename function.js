document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchBoxContainer = document.getElementById('search-box-container');
    const searchInput = document.querySelector('.search-input');

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinksMobile = document.getElementById('nav-links-mobile');

    // --- Search Box Toggle ---
    searchBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent document click from immediately closing
        searchBoxContainer.classList.toggle('active');
        if (searchBoxContainer.classList.contains('active')) {
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }
        // If hamburger menu is open, close it
        if (navLinksMobile.classList.contains('active')) {
            navLinksMobile.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });

    // --- Hamburger Menu Toggle ---
    hamburgerBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent document click from immediately closing
        hamburgerBtn.classList.toggle('active');
        navLinksMobile.classList.toggle('active');
        // If search box is open, close it
        if (searchBoxContainer.classList.contains('active')) {
            searchBoxContainer.classList.remove('active');
        }
    });

    // --- Close Menus on Outside Click ---
    document.addEventListener('click', function(event) {
        // Check if click is outside search components
        const isClickInsideSearch = searchBtn.contains(event.target) || searchBoxContainer.contains(event.target);
        if (!isClickInsideSearch && searchBoxContainer.classList.contains('active')) {
            searchBoxContainer.classList.remove('active');
        }

        // Check if click is outside hamburger components
        const isClickInsideHamburger = hamburgerBtn.contains(event.target) || navLinksMobile.contains(event.target);
        if (!isClickInsideHamburger && navLinksMobile.classList.contains('active')) {
            navLinksMobile.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });

    // Close mobile menu when a link is clicked
    navLinksMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksMobile.classList.contains('active')) {
                navLinksMobile.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        });
    });
});
