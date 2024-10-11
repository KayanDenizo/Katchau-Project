// SISTEMA - 90% PRONTO - PARA ADICIONAR TODOS OS PRODUTOS NO CARRINHO

// // Selecione o botão Adicionar ao Carrinho
const body = document.getElementById('page');

const botoesAdicionar = document.querySelectorAll('.product button.btnPrice');
const botaoCarrinho = document.getElementById('botaoCarrinho');

// Selecione a sidebar
const sidebar = document.getElementById('sidebar');

const footerSidebar = document.getElementById('footerSidebar');

// Select All
const selectAll = document.getElementById('selectAll');

// Input Checkbox
const input = document.getElementById('input_check');

//Subtotal

// Selecione a lista de produtos
const listaProdutos = document.getElementById('lista-produtos');

// Selecione as informações do produto
const nomeProduto = document.getElementById('nome-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const precoProduto = document.getElementById('preco-produto');
const fotoProduto = document.getElementById('foto-produto');

// Adicione um evento de clique a cada botão Adicionar ao Carrinho
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        sidebar.classList.add('show');
        body.classList.add('bg');
        if (listaProdutos.children.length >= 0) {
            footerSidebar.style.display='block';
        }
        // Exiba a sidebar

        // Obtenha as informações do produto
        const produto = {
            nome: botao.parentNode.querySelector('.title').textContent,
            descricao: botao.parentNode.querySelector('.off').textContent,
            preco: botao.parentNode.querySelector('.price').textContent,
            foto: botao.parentNode.querySelector('.imagem-product').src,
            quantidade: 1
        };

        const itemProduto = document.createElement('li');
        itemProduto.innerHTML = `
    <div class="produtos_container">
     <input type="checkbox" class="input_check" id="input_check">
     <div class="container">
        <div class="produto-container">
            <img src="${produto.foto}" alt="${produto.nome}" id="foto-produto">
            <div class="info-produto">
                <p>${produto.nome}</p>
                <p>${produto.preco}</p>
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
            if (listaProdutos.children.length === 0) {
                footerSidebar.style.display='none';
            }
        });

        itemProduto.querySelector('.arquivar').addEventListener('click', () => {
            listaProdutos.removeChild(itemProduto);
        });
    });
});


botaoCarrinho.addEventListener('click', (event) => {
    event.preventDefault();
    // Exiba a sidebar
    sidebar.classList.add('show');
    body.classList.add('bg');
});

// Adicione um evento de clique ao documento para fechar a sidebar
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== botaoCarrinho && sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        document.querySelector('.produto').classList.remove('show');
        body.classList.remove('bg');

    }
});

selectAll.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
});