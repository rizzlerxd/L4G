document.addEventListener('DOMContentLoaded', function () {
    // Show the popup after 1 second
    setTimeout(function () {
        document.getElementById('popup').style.left = '0';
    }, 1000);

    // Hide the popup and show the main content when the button is clicked
    document.querySelector('.btn-primary').addEventListener('click', function () {
        document.getElementById('popup').style.left = '-100%';
        document.querySelector('.main-content').style.display = 'block';
    });
});
