
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

    if(email.value.endsWith('@g')){
        email.value += 'mail.com';
    }
});

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
