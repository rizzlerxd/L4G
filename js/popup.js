document.addEventListener('DOMContentLoaded', function() {
    // Show popup after 1 second
    setTimeout(function() {
        document.getElementById('popup').style.display = 'flex';
    }, 1000);

    // Close popup on button click
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
});
