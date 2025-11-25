document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchBoxContainer = document.getElementById('search-box-container');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
        // Toggle the 'active' class which controls the CSS transition
        searchBoxContainer.classList.toggle('active');
        
        // Optional: Focus the input when opened
        if (searchBoxContainer.classList.contains('active')) {
            setTimeout(() => {
                searchInput.focus();
            }, 100); // Slight delay for smooth transition
        }
    });

    // Optional: Close search box if clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = searchBtn.contains(event.target) || searchBoxContainer.contains(event.target);
        
        if (!isClickInsideNav && searchBoxContainer.classList.contains('active')) {
            searchBoxContainer.classList.remove('active');
        }
    });
});