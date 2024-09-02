document.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelector('.progress');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }, 30); // Adjust the speed of the loader here
});
