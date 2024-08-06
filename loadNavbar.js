document.addEventListener("DOMContentLoaded", function() {
    fetch('redoingnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});
