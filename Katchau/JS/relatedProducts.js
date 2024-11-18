// Posição inicial do carrossel
let currentIndex = 0;

function scrollToLeft() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth; // Largura de um item

    // Voltar apenas se não estiver no início
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}

function scrollToRight() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth; // Largura de um item
    const visibleItems = 4; // Quantos itens são visíveis por vez
    const totalItems = items.length;

    // Avançar apenas se houver itens restantes à direita
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}
