document.querySelectorAll('.stars-rating').forEach(starContainer => {
    const stars = starContainer.querySelectorAll('.star');
    const ratingValue = starContainer.querySelector('.rating-value');
    
    // Define uma quantidade de estrelas aleatória entre 3 e 5
    const defaultRating = Math.floor(Math.random() * 3) + 3;  // Avaliação entre 3 e 5 estrelas
    const defaultRatingCount = Math.floor(Math.random() * 181) + 20; // Número de avaliações entre 20 e 200

    // Aplica o valor inicial de estrelas e número de avaliações ao carregar a página
    ratingValue.textContent = `(${defaultRatingCount})`;
    ratingValue.dataset.rating = defaultRating;

    // Aplica a classe 'selected' nas estrelas conforme o valor aleatório
    stars.forEach((star, index) => {
        if (index < defaultRating) {
            star.classList.add('selected');
        }

        // Evento de passar o mouse
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            stars.forEach((s, i) => {
                s.classList.toggle('hovered', i < rating);
            });
        });

        // Evento de clique
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            ratingValue.textContent = `(${defaultRatingCount})`; // Mantém o número de avaliações
            ratingValue.dataset.rating = rating;

            stars.forEach((s, i) => {
                s.classList.toggle('selected', i < rating);
            });
        });
    });

    // Remover hover quando o mouse sai do container
    starContainer.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hovered'));
        const rating = parseInt(ratingValue.dataset.rating) || 0;
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i < rating);
        });
    });
});
