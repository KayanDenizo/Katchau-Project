
let popUp_Cep_NaoEncontrado = document.getElementById('popUp_Cep_NaoEncontrado');
let cepInvalidoText = document.getElementById('cepInvalidoText');

function buscaCEP(valor) {

    const cepInput = document.getElementById('cep');

    let cep = valor.replace(/\D/g, '');

    if (cep != '') {
        let validaCep = /^[0-9]{8}$/; //determina que a string deve conter exatamente 8 digitos e entre 0 a 9

        if (validaCep.test(cep)) {
            let api = document.createElement('script'); //para pegar um serviço externo que seria a API
            api.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(api); //ele é inserido como um filho de um elemento ja existente | ele pode inserir elementos html dentro de outros elementos
        } else {
            limpaCepForm();
            cep.addEventListener('blur', () => {
                popUpEvent('Digite um CEP válido', '23px');
            });
        };
    };
};

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('adress').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
    } else {
        limpaCepForm();
        popUpEvent('   CEP inválido. Tente novamente.', '23px');
    };
};

function limpaCepForm() {
    cep.value = '';
    adress.value = '';
};

const adress = document.getElementById('adress');
adress.addEventListener('keypress', () => {
    const adressLength = adress.value.length;

    if (adressLength === 0) {
        adress.value = "Rua ";
    };
});

cep.addEventListener('keypress', (event) => {

    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    };

    let cepLength = cep.value.length;

    if (cepLength === 5) {
        cep.value += "-";
    };
});

/* $(document).ready(function () {
    $('#cep').mask('00000-000');
}); */


/* $(document).ready(function () {
    
function rua(nomeDaRua) {
        return 'Rua ' + nomeDaRua;
    };

    $('#adress').on('input', function () {
        const nomeDaRua = $(this).val().replace(/Rua /, '');
        $(this).val(rua(nomeDaRua));

        if (nomeDaRua.length === 0) {
            $(this).val('');
        };
    });
}); */


const cpf = document.getElementById('cpf');
cpf.addEventListener('keypress', (event) => {

    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    };

    let cpfLength = cpf.value.length;

    if (cpfLength === 3 || cpfLength === 7) {
        cpf.value += ".";
    } else if (cpfLength === 11) {
        cpf.value += "-";
    };
});
/* $(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
}); */


const email = document.getElementById('email');
const close = document.getElementById('close');
const emailIcon = document.getElementById('emailIcon');

email.addEventListener('input', () => {

    if (email.value.length != 0) {
        emailIcon.style.display = 'none';
        close.style.display = 'flex';
    } else {
        emailIcon.style.display = 'flex';
        close.style.display = 'none';
    };
});

close.addEventListener('click', () => {

    email.value = '';

    if (email.value.length == 0) {
        emailIcon.style.display = 'flex';
        close.style.display = 'none';
    };

});

email.addEventListener('input', () => {
    stringDigitada = email.value.length;

    if (email.value.endsWith('@g')) {
        email.value += 'mail.com';
    }
});

/* $(document).ready(function () {

    $('#email').on('input', function () {

        const usuario = $(this).val().replace(/@g /, '').trim();

        if (usuario.includes('@g')) {
            $(this).val(usuario.replace(/@g.*$/, '@gmail.com'));
        } else if (usuario.includes('@y')) {
            $(this).val(usuario.replace(/@y.*$/, '@yahoo.com'));
        };

    });
}); */


const phone = document.getElementById('phone');
phone.addEventListener('keypress', (event) => {

    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    };

    let phoneLength = phone.value.length;

    if (phoneLength === 0) {
        phone.value += '(';
    } else if (phoneLength === 3) {
        phone.value += ') ';
    };

    if (phoneLength === 10) {
        phone.value += '-';
    }
});
/* $(document).ready(function () {
    $('#phone').mask('(00) 00000-0000');
}); */


const cadeado = document.getElementById('cadeado');
const senha = document.getElementById('password');
const eyesOn = document.getElementById('eyesOn');
const eyesOff = document.getElementById('eyesOff');

senha.addEventListener('input', () => {
    if (senha.value.length > 0) {
        cadeado.style.display = 'none';
        eyesOn.style.display = 'flex';
    } else {
        cadeado.style.display = 'flex';
        eyesOn.style.display = 'none';
        eyesOff.style.display = 'none';
    }
});

eyesOn.addEventListener('click', () => {
    senha.type = 'text';
    eyesOff.style.display = 'flex';
    eyesOn.style.display = 'none';
});

eyesOff.addEventListener('click', () => {
    senha.type = 'password';
    eyesOn.style.display = 'flex';
    eyesOff.style.display = 'none';
});


const popUp = document.querySelector('.popUp');
const textAdded = document.querySelector('.textAdded');

function popUpEvent(mensagem, margem) {

    textAdded.textContent = mensagem;

    if (margem) {
        textAdded.style.marginLeft = margem;
    };

    const popReduced = () => {
        popUp.style.width = '40px';
        popUp.style.display = 'flex';
        popUp.style.opacity = '1';
    };

    popReduced();


    setTimeout(() => {
        popUp.style.width = '355px';
        popUp.style.transition = '0.5s';
        popUp.style.boxShadow = '5px 5px 8px #0a0a0a';
        textAdded.style.display = 'flex';
        textAdded.style.fontSize = '18px';
        textAdded.style.alignItems = 'center';
    }, 300);

    setTimeout(() => {
        popReduced();
    }, 2500);

    setTimeout(() => {
        popUp.style.opacity = '0';
        popUp.style.transition = '0.5s';
    }, 3200);

};

const continuar = document.getElementById('continuar');
const termos = document.getElementById('termosDeUso');

if (termos.checked) {
    continuar.disabled = true;
} else {
    continuar.disabled = false;
}

const popUp_TermosDeUso = document.getElementById('popUpTermos');
const aceiteTermosText = document.getElementById('aceiteTermosText');

continuar.addEventListener('click', () => {
    if (termos.checked == true) {
        window.location.href = 'cadastro-sucesso.html';
    } else {
        popUpEvent('Aceite os Termos de Uso e Política.');
    };
});
