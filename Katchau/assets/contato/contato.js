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