const speechHeaders = document.querySelectorAll('.speech-header');

speechHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const details = header.nextElementSibling;
        details.style.display = details.style.display === 'none' || details.style.display === '' ? 'block' : 'none';
    });
});