document.addEventListener('DOMContentLoaded', function() {
    // Função para destacar estrelas
    function highlight(starsContainer, rating) {
        const stars = starsContainer.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.remove('active');
            if (parseInt(star.dataset.value) <= rating) {
                star.classList.add('active');
            }
        });
    }

    // Seleciona todos os produtos
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const starsContainer = product.querySelector('.stars');
        const stars = starsContainer.querySelectorAll('.star');

        // Event listeners para cada estrela
        stars.forEach(star => {
            // Mouse enter em uma estrela
            star.addEventListener('mouseenter', function() {
                const rating = this.dataset.value;
                highlight(starsContainer, rating);
            });

            // Click em uma estrela
            star.addEventListener('click', function() {
                const rating = this.dataset.value;
                const productId = product.dataset.productId;
                starsContainer.dataset.rating = rating;
                highlight(starsContainer, rating);
                console.log('Produto ID: ' + productId + ' - Avaliação: ' + rating + ' estrelas');
            });
        });

        // Mouse leave do container de estrelas
        starsContainer.addEventListener('mouseleave', function() {
            const rating = this.dataset.rating;
            highlight(starsContainer, rating);
        });
    });
});