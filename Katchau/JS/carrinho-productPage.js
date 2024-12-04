// SISTEMA - 90% PRONTO - PARA ADICIONAR TODOS OS PRODUTOS NO CARRINHO

// // Selecione o botão Adicionar ao Carrinho
const body = document.getElementById('page');

const botoesAdicionar = document.querySelectorAll('.addToCart-btn');
const botaoCarrinho = document.getElementById('botaoCarrinho');

// Selecione a sidebar
const sidebar = document.getElementById('sidebar');

const closeSidebar = document.getElementById('closeSidebar');

// Footer Sidebar
const footerSidebar = document.getElementById('footerSidebar');

// Subtotal
let subtotal = 0;

let quantidadeProduto = 0;

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
            footerSidebar.style.display = 'block';
        }
        // Exiba a sidebar

        // Obtenha as informações do produto
        const produto = {
            nome: document.querySelector('.title').textContent,
            descricao: document.querySelector('.off').textContent,
            preco: parseFloat(document.querySelector('.price').textContent.replace('R$ ', '')),
            foto: document.querySelector('.imagem-product').src,
            quantidade: 1
        };

        const itemProduto = document.createElement('li');
        itemProduto.innerHTML = `
    <div class="produtos_container">
     <input type="checkbox" class="input_check" id="input_check">
     <div class="container">
        <div class="produto-container">
            <img src="${produto.foto}" style="margin: 0;" alt="${produto.nome}" id="foto-produto">
            <div class="info-produto">
                <p>${produto.nome}</p>
                <p>R$ ${produto.preco},00</p>
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

        subtotal += produto.preco;
        document.getElementById('subTotal').innerHTML = `R$ ${subtotal.toFixed(2)}`;

        quantidadeProduto += produto.quantidade;
        document.getElementById('quantidade_produtos').innerHTML = `${quantidadeProduto} produtos`;
        document.getElementById('preco_total').textContent = `R$ ${subtotal.toFixed(2)}`

        // Adicione um evento de clique ao botão de aumentar quantidade
        itemProduto.querySelector('.aumentar').addEventListener('click', () => {
            const quantidadeTexto = itemProduto.querySelector('.quantidade-texto');
            const quantidade = parseInt(quantidadeTexto.textContent) + 1;
            quantidadeTexto.textContent = quantidade;

            subtotal += produto.preco;
            document.getElementById('subTotal').textContent = `R$ ${subtotal.toFixed(2)}`;
            document.getElementById('preco_total').textContent = `R$ ${subtotal.toFixed(2)}`

            quantidadeProduto += produto.quantidade;
            document.getElementById('quantidade_produtos').innerHTML = `${quantidadeProduto} produtos`;
        });

        // Adicione um evento de clique ao botão de diminuir quantidade
        itemProduto.querySelector('.diminuir').addEventListener('click', () => {
            const quantidadeTexto = itemProduto.querySelector('.quantidade-texto');
            const quantidade = parseInt(quantidadeTexto.textContent) - 1;
            if (quantidade >= 1) {
                quantidadeTexto.textContent = quantidade;
                subtotal -= produto.preco; // Subtrai o preço do produto do subtotal
                document.getElementById('subTotal').textContent = `R$ ${subtotal.toFixed(2)}`;
                document.getElementById('preco_total').textContent = `R$ ${subtotal.toFixed(2)}`

                quantidadeProduto -= produto.quantidade;
                document.getElementById('quantidade_produtos').innerHTML = `${quantidadeProduto} produtos`;
            }

        });

        // Adicione um evento de clique ao botão de excluir
        // Adicione um evento de clique ao botão de excluir
        itemProduto.querySelector('.excluir').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Obtenha o valor total do produto que foi removido antes de removê-lo do DOM
            const quantidade = parseInt(itemProduto.querySelector('.quantidade-texto').textContent);
            const precoProduto = parseFloat(itemProduto.querySelector('.info-produto p:nth-child(2)').textContent.replace('R$ ', '').replace(',', '.'));

            // Subtraia o valor do produto do subtotal
            subtotal -= (precoProduto * quantidade);
            document.getElementById('subTotal').textContent = `R$ ${subtotal.toFixed(2)}`;
            document.getElementById('preco_total').textContent = `R$ ${subtotal.toFixed(2)}`

            quantidadeProduto -= quantidade;
            document.getElementById('quantidade_produtos').innerHTML = `${quantidadeProduto} produtos`;

            // Remova o item do carrinho
            listaProdutos.removeChild(itemProduto);

            // Verifique se a lista de produtos está vazia e esconda o footer se necessário
            if (listaProdutos.children.length === 0) {
                footerSidebar.style.display = 'none';
            }

            // Exibir a sidebar se necessário
            sidebar.classList.add('show');
        });

        itemProduto.querySelector('.arquivar').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Obtenha o valor total do produto que foi removido antes de removê-lo do DOM
            const quantidade = parseInt(itemProduto.querySelector('.quantidade-texto').textContent);
            const precoProduto = parseFloat(itemProduto.querySelector('.info-produto p:nth-child(2)').textContent.replace('R$ ', '').replace(',', '.'));

            // Subtraia o valor do produto do subtotal
            subtotal -= (precoProduto * quantidade);
            document.getElementById('subTotal').textContent = `R$ ${subtotal.toFixed(2)}`;
            document.getElementById('preco_total').textContent = `R$ ${subtotal.toFixed(2)}`

            quantidadeProduto -= quantidade;
            document.getElementById('quantidade_produtos').innerHTML = `${quantidadeProduto} produtos`;

            // Remova o item do carrinho
            listaProdutos.removeChild(itemProduto);

            // Verifique se a lista de produtos está vazia e esconda o footer se necessário
            if (listaProdutos.children.length === 0) {
                footerSidebar.style.display = 'none';
            }

            // Exibir a sidebar se necessário
            sidebar.classList.add('show');
        });
    });
});


botaoCarrinho.addEventListener('click', (event) => {
    event.preventDefault();
    // Exiba a sidebar
    sidebar.classList.add('show');
    body.classList.add('bg');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
    body.classList.remove('bg');
})

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