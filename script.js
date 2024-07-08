document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelectorAll('.container').forEach(container => {
            container.classList.add('fade-in');
        });
    }, 500);
});
