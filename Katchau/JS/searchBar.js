const searchBar = document.getElementById('search-bar');
const productListContainer = document.querySelector('.product-list-container');

searchBar.addEventListener('input', function() {
    // Aqui você pode implementar a lógica para buscar produtos
    // Para fins de exemplo, vamos apenas mostrar a lista
    productListContainer.style.display = 'block'; // Exibe a lista de produtos
});

// Opcional: esconder a lista quando o usuário clica fora dela
document.addEventListener('click', function(event) {
    if (!productListContainer.contains(event.target) && event.target !== searchBar) {
        productListContainer.style.display = 'none'; // Esconde a lista
    }
});