lucide.createIcons()

const inputOpcao = document.querySelectorAll('.opcao input');
const valorSelecionado = document.getElementById('estaSelecionado');
const motivoInput = document.getElementById('motivo');

inputOpcao.forEach(input => {

    input.addEventListener('click', event => {
        valorSelecionado.textContent = input.dataset.label;

        const isMouse = event.pointerType == "mouse";
        isMouse && motivoInput.click();
    });

});

const valorSelecionadoMetodo = document.getElementById('estaSelecionadoMetodo');
const inputOpcaoMetodo = document.querySelectorAll('.opcaoMetodo input');
const metodoInput = document.getElementById('metodo');

inputOpcaoMetodo.forEach(input => {

    input.addEventListener('click', event => {
        valorSelecionadoMetodo.textContent = input.dataset.label;

        const isMouse = event.pointerType == "mouse";
        isMouse && metodoInput.click();
    });
});


const btnConfirmacao = document.getElementById('confirmarSolicitacao');
const containerPop = document.getElementById('eventBtnConfirmar');
const btnClose = document.getElementById('closePop');

btnConfirmacao.addEventListener('click', () => {
    containerPop.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
    containerPop.style.display = 'none';
});

const popContainerProgress = document.querySelector('.popContainerProgress');
const eventBtnNegar = document.getElementById('eventBtnNegar');
const progressoBar = document.querySelector('.barraProgresso');
const naoBtn = document.getElementById('naoBtn');

progressoBar.addEventListener('animationend', () => {
    eventBtnNegar.style.display = 'none';
    popContainerProgress.style.display = 'none';
});

naoBtn.addEventListener('click', () => {
    eventBtnNegar.style.display = 'flex';
    containerPop.style.display = 'none';
});

