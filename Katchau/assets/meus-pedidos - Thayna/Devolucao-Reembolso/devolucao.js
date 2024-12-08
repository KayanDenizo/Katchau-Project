lucide.createIcons()

const inputOpcao = document.querySelectorAll('.opcao input');
const valorSelecionado = document.getElementById('estaSelecionado');
const selectInput = document.getElementById('motivo');

inputOpcao.forEach(input => {

    input.addEventListener('click', event => {
        valorSelecionado.textContent = input.dataset.label;

        const isMouse = event.pointerType == "mouse";
        isMouse && selectInput.click();
    });

});