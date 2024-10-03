// Selecione o botão Adicionar ao Carrinho
const botaoAdicionar = document.getElementById('adicionar-carrinho');
const botaoCarrinho = document.getElementById('botaoCarrinho');

// Selecione a sidebar
const sidebar = document.getElementById('sidebar');

// Selecione a lista de produtos
const listaProdutos = document.getElementById('lista-produtos');

// Selecione as informações do produto
const nomeProduto = document.getElementById('nome-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const precoProduto = document.getElementById('preco-produto');
const fotoProduto = document.getElementById('foto-produto');

// Adicione um evento de clique ao botão Adicionar ao Carrinho


botaoAdicionar.addEventListener('click', () => {
    // Exiba a sidebar
    sidebar.classList.add('show');

    // Adicione as informações do produto à lista de produtos
    const produto = {
        nome: 'Nome do Produto',
        descricao: 'Descrição do Produto',
        preco: 'R$ 99,99',
        foto: 'https://example.com/foto-produto.jpg',
        quantidade: 1
    };

    const itemProduto = document.createElement('li');
    itemProduto.innerHTML = `
    <h2>${produto.nome}</h2>
    <p>${produto.descricao}</p>
    <p>${produto.preco}</p>
    <img src="${produto.foto}" alt="${produto.nome}">
    <div class="quantidade">
        <button class="diminuir">-</button>
        <span class="quantidade-texto">${produto.quantidade}</span>
        <button class="aumentar">+</button>
    </div>
    <button class="excluir">Excluir</button>
  `;

    listaProdutos.appendChild(itemProduto);

    // Adicione um evento de clique ao botão de aumentar quantidade
    itemProduto.querySelector('.aumentar').addEventListener('click', () => {
        const quantidadeTexto = itemProduto.querySelector('.quantidade-texto');
        const quantidade = parseInt(quantidadeTexto.textContent) + 1;
        quantidadeTexto.textContent = quantidade;
    });

    // Adicione um evento de clique ao botão de diminuir quantidade
    itemProduto.querySelector('.diminuir').addEventListener('click', () => {
        const quantidadeTexto = itemProduto.querySelector('.quantidade-texto');
        const quantidade = parseInt(quantidadeTexto.textContent) - 1;
        if (quantidade >= 1) {
            quantidadeTexto.textContent = quantidade;
        }
    });

    // Adicione um evento de clique ao botão de excluir
    itemProduto.querySelector('.excluir').addEventListener('click', () => {
        listaProdutos.removeChild(itemProduto);
    });

    // Exiba as informações do produto
    nomeProduto.textContent = produto.nome;
    descricaoProduto.textContent = produto.descricao;
    precoProduto.textContent = produto.preco;
    fotoProduto.src = produto.foto;
    fotoProduto.alt = produto.nome;

    // Exiba o produto
    document.querySelector('.produto').classList.add('show');
});

botaoCarrinho.addEventListener('click', (event) => {
    event.preventDefault();
    // Exiba a sidebar
    sidebar.classList.add('show');
});


// Adicione um evento de clique ao documento para fechar a sidebar
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== botaoAdicionar && event.target !== botaoCarrinho && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        document.querySelector('.produto').classList.remove('show');
    }
});