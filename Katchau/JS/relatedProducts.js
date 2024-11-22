// Posição inicial do carrossel
let currentIndex = 0;

// Número de itens visíveis por vez
const visibleItems = 3;

function scrollToLeft() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth; // Largura de um item

    // Voltar apenas se não estiver no início
    if (currentIndex > 0) {
        currentIndex -= visibleItems;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}

function scrollToRight() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth; // Largura de um item
    const totalItems = items.length;

    // Avançar apenas se houver itens restantes à direita
    if (currentIndex < totalItems - visibleItems) {
        currentIndex += visibleItems;
        const offset = itemWidth * currentIndex - (itemWidth * visibleItems); // Calcula o offset correto
        track.style.transform = `translateX(-${offset}px)`;
    }
}