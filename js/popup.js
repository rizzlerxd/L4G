// JavaScript for interactive pop-up effect
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector('.hero-content');
    popup.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
        popup.style.transition = 'transform 1s ease-in-out';
        popup.style.transform = 'translateX(0)';
    }, 500);
});
