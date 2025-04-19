// Simplified theme toggle script
(function() {
    // Execute immediately when script loads
    console.log('Theme toggle script loaded');
    
    // Function to toggle theme
    function toggleTheme() {
        console.log('Toggle theme function called');
        
        const body = document.body;
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const icon = themeToggleBtn.querySelector('i');
        
        // Check current theme
        if (body.classList.contains('dark-theme')) {
            // Switch to light theme
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light-theme');
            console.log('Switched to light theme');
        } else {
            // Switch to dark theme
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark-theme');
            console.log('Switched to dark theme');
        }
    }
    
    // Apply saved theme on page load
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        console.log('Saved theme:', savedTheme);
        
        if (savedTheme === 'dark-theme') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            
            const icon = document.querySelector('#theme-toggle-btn i');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
            console.log('Applied dark theme from localStorage');
        }
    }
    
    // Initialize theme toggle
    function initThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', toggleTheme);
            console.log('Theme toggle button event listener added');
        } else {
            console.error('Theme toggle button not found');
        }
        
        // Apply saved theme
        applySavedTheme();
    }
    
    // Initialize when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        // DOM already loaded
        initThemeToggle();
    }
})();