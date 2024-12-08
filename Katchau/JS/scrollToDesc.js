document.addEventListener('DOMContentLoaded', () => {
    const verDescButton = document.getElementById('verDesc');
    const descriptionElement = document.getElementById('features-id');

    if (verDescButton && descriptionElement) {
        verDescButton.addEventListener('click', () => {
            descriptionElement.scrollIntoView({behavior: 'smooth'});
        });
    }
});