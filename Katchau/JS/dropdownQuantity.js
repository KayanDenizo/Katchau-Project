function selectQuantity(quantity) {
    document.getElementById('selectedQuantity').innerText = quantity + 'unidade' + (quantity > 1 ? 's' : '');
}