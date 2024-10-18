// script.js
window.onscroll = function() {
    const button = document.getElementById("scrollToTopBtn");
    // Verifica se a rolagem é maior que 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Oculta o botão
    }
};

// Função para voltar ao topo da página
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
};