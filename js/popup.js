document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const close = document.getElementById('close');

    // Show the popup
    popup.style.display = 'flex';

    // Close the popup
    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Optionally, you can also close the popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
