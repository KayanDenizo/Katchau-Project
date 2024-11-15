document.querySelectorAll('.stars-rating').forEach(starContainer => {
    const stars = starContainer.querySelectorAll('.star');
    const ratingValue = starContainer.querySelector('.rating-value');
    const defaultRating = Math.floor(Math.random() * 5) + 1;  
    const defaultRatingCount = Math.floor(Math.random() * 181) + 20; 
    const modal = document.getElementById('rating-modal');
    const thankYouModal = document.getElementById('thank-you-modal');
    const selectedRating = document.getElementById('selected-rating');
    const reviewText = document.getElementById('review-text');
    const submitReviewBtn = document.getElementById('submit-review');
    const closeModalBtns = document.querySelectorAll('.close-modal');

    ratingValue.textContent = `(${defaultRatingCount})`;
    ratingValue.dataset.rating = defaultRating;

    stars.forEach((star, index) => {
        if (index < defaultRating) {
            star.classList.add('selected');
        }

        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            stars.forEach((s, i) => {
                s.classList.toggle('hovered', i < rating);
            });
        });

        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            selectedRating.textContent = rating; 
            reviewText.value = ''; // Limpa o comentário anterior
            
            // Exibe o modal de avaliação
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    starContainer.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hovered'));
        const rating = parseInt(ratingValue.dataset.rating) || 0;
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i < rating);
        });
    });

    // Fechar os modais
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
            thankYouModal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                thankYouModal.style.display = 'none';
            }, 500);
        });
    });

    // Enviar a avaliação e exibir o modal de agradecimento
    submitReviewBtn.addEventListener('click', () => {
        const rating = selectedRating.textContent;
        const review = reviewText.value;
        console.log(`Avaliação: ${rating} estrelas. Comentário: ${review}`);

        // Fecha o modal de avaliação
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';

            // Exibe o modal de agradecimento
            thankYouModal.style.display = 'flex';
            setTimeout(() => {
                thankYouModal.classList.add('show');
            }, 10);
        }, 500);
    });

    // Fechar o modal de agradecimento ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal || event.target === thankYouModal) {
            modal.classList.remove('show');
            modal.style.display = 'none';

            thankYouModal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                thankYouModal.style.display = 'none';
            }, 500);
        }
    });
});


// Função para mostrar o popup com animação
// Função para mostrar o popup com animação
function showThankYouPopup() {
    const popup = document.getElementById('thank-you-popup');
    
    // Adiciona a classe "show" para iniciar a animação
    popup.classList.add('show');

    // Esconde o popup após 2,4 segundos
    setTimeout(() => {
        popup.classList.remove('show');  // Remove a classe para esconder o popup
    }, 2400);  // O popup desaparecerá após 2,4 segundos
}

// Exemplo de como mostrar o popup quando a avaliação for enviada
document.getElementById('submit-review').addEventListener('click', () => {
    showThankYouPopup();  // Chama a função para exibir o popup de agradecimento
});
