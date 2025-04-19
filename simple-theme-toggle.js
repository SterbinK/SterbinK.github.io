// Super simple theme toggle
window.onload = function() {
    console.log("Window loaded - initializing theme toggle");
    
    // Get the button
    var toggleBtn = document.getElementById('theme-toggle-btn');
    
    if (!toggleBtn) {
        console.error("Theme toggle button not found!");
        return;
    }
    
    console.log("Theme toggle button found:", toggleBtn);
    
    // Add click event directly
    toggleBtn.onclick = function(e) {
        console.log("Button clicked!");
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle theme
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
            console.log("Switched to dark theme");
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
            console.log("Switched to light theme");
        }
        
        return false;
    };
    
    // Apply saved theme
    var savedTheme = localStorage.getItem('theme');
    console.log("Saved theme:", savedTheme);
    
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        console.log("Applied dark theme");
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        console.log("Applied light theme");
    }
    
    // Add a visible indicator that the script is loaded
    console.log("Theme toggle initialized successfully");
};