function toggleDescription() {
    const description = document.getElementById('description');
    const toggleButton = document.querySelector('.toggle-button');

    if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        toggleButton.innerHTML = 'Ver mais &#x25BC;'; // seta para baixo
    } else {
        description.classList.add('expanded');
        toggleButton.innerHTML = 'Ver menos &#x25B2;'; // seta para cima
    }
}
