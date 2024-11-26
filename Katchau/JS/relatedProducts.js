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
        track.style.transform = `translateX(-${(itemWidth + 20) + currentIndex}px)`;
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
        track.style.transform = `translateX(-${(itemWidth + 20) * currentIndex}px)`;
    }
}

// TESTAR CODIGo

// function scrollToLeft() {
//     const track = document.querySelector('.carousel-track');
//     const items = document.querySelectorAll('.carousel-item');
//     const itemWidth = items[0].offsetWidth; // Largura do item incluindo padding e border
//     const itemMargin = parseInt(window.getComputedStyle(items[0]).marginLeft) + parseInt(window.getComputedStyle(items[0]).marginRight); // Margem esquerda + direita

//     // Voltar apenas se não estiver no início
//     if (currentIndex > 0) {
//         currentIndex -= visibleItems;
//         if (currentIndex < 0) {
//             currentIndex = 0;
//         }
//         // Incluindo a margem no cálculo da largura
//         track.style.transform = `translateX(-${(itemWidth + itemMargin) * currentIndex}px)`;
//     }
// }

// function scrollToRight() {
//     const track = document.querySelector('.carousel-track');
//     const items = document.querySelectorAll('.carousel-item');
//     const itemWidth = items[0].offsetWidth; // Largura do item incluindo padding e border
//     const itemMargin = parseInt(window.getComputedStyle(items[0]).marginLeft) + parseInt(window.getComputedStyle(items[0]).marginRight); // Margem esquerda + direita
//     const totalItems = items.length;

//     // Avançar apenas se houver itens restantes à direita
//     if (currentIndex < totalItems - visibleItems) {
//         currentIndex += visibleItems;
//         // Incluindo a margem no cálculo da largura
//         const offset = (itemWidth + itemMargin) * currentIndex;
//         track.style.transform = `translateX(-${offset}px)`;
//     }
// }
