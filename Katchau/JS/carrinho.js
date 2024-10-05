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
        nome: 'Nome do produto',
        descricao: 'Descrição do Produto',
        preco: 'R$ 99,99',
        foto: '../assets/IMG/img-products/fone.png',
        quantidade: 1
    };

    const product2 = {
        nome: nomeProduto.innerText,
        desc: descricaoProduto.innerText,
        preco: precoProduto.innerText,
        foto: fotoProduto.src
    };

    const itemProduto = document.createElement('li');
    itemProduto.innerHTML = `
    <div class="container">
        <div class="produto-container">
            <img src="${product2.foto}" alt="${produto.nome}" id="foto-produto">
            <div class="info-produto">
                <p>${product2.desc}</p>
                <p>${product2.preco}</p>
                <div class="bottom-container">
                    <div class="quantidade">
                        <button class="diminuir">-</button>
                        <span class="quantidade-texto">${produto.quantidade}</span>
                        <button class="aumentar">+</button>
                    </div>
                    <div class="excluir-arquivar">
                        <span class="excluir">Excluir</span>
                        <span class="arquivar">Arquivar</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

    itemProduto.querySelector('.arquivar').addEventListener('click', () => {
        listaProdutos.removeChild(itemProduto);
    });

    // Exiba as informações do produto
    nomeProduto.textContent = product2.nome;
    descricaoProduto.textContent = product2.desc;
    precoProduto.textContent = product2.preco;
    fotoProduto.src = product2.foto;
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