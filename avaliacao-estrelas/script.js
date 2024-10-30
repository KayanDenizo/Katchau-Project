// Seleciona todos os elementos de estrelas
const starContainers = document.querySelectorAll('.stars');

starContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');

            // Remove a classe 'selected' de todas as estrelas
            stars.forEach(s => s.classList.remove('selected'));

            // Adiciona a classe 'selected' até a estrela clicada
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected');
            }

            // Aqui você pode adicionar lógica para salvar a avaliação, se necessário
            console.log(`Produto ID: ${container.getAttribute('data-star-id')} - Avaliação: ${value} estrelas`);
        });

        // Adiciona o efeito de hover
        star.addEventListener('mouseenter', () => {
            // Remove a seleção de todas as estrelas
            stars.forEach(s => s.classList.remove('selected'));
            // Adiciona a seleção até a estrela atual
            for (let i = 0; i < star.getAttribute('data-value'); i++) {
                stars[i].classList.add('selected');
            }
        });

        // Remove o efeito de hover
        star.addEventListener('mouseleave', () => {
            // Remove a seleção de todas as estrelas
            stars.forEach(s => s.classList.remove('selected'));
            // Reaplica a seleção atual, se houver
            const selectedStar = Array.from(stars).find(s => s.classList.contains('selected'));
            if (selectedStar) {
                for (let i = 0; i < selectedStar.getAttribute('data-value'); i++) {
                    stars[i].classList.add('selected'); // Reaplica a seleção
                }
            }
        });
    });
});