let products = []; // Variável para armazenar produtos carregados

async function loadProducts() {
    try {
        const response = await fetch('produtos.json'); // Caminho correto
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        products = await response.json(); // Armazena os produtos
        console.log('Produtos carregados:', products);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpa a lista antes de exibir

    productsToDisplay.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name}: ${product.description} - R$ ${product.price.toFixed(2)}`;
        productList.appendChild(listItem);
    });
}

function filterProducts(products, searchTerm) {
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

async function init() {
    await loadProducts(); // Aguarda o carregamento dos produtos

    const searchBar = document.getElementById('search-bar');
    const productList = document.getElementById('product-list');

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value;
        const filteredProducts = filterProducts(products, searchTerm);
        displayProducts(filteredProducts);
    });

    // Evento para esconder a lista de produtos ao clicar fora
    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && !productList.contains(event.target)) {
            productList.innerHTML = ''; // Limpa a lista de produtos
        }
    });
}

init(); // Chama a função init para iniciar o aplicativo