const addedTo = document.querySelectorAll('.addedTo');
const popUpCart = document.getElementById('popUpCart');
const textAdded = document.getElementById('textAdded');

const popReduced = () => {
    popUpCart.style.width = '45px';
    popUpCart.style.display = 'flex';
};

addedTo.forEach(button => {

    button.addEventListener('click', () => {
        popUpCart.style.opacity = '1';

        popReduced();

        setTimeout(() => {
            popUpCart.style.width = '370px';
            popUpCart.style.transition = '0.5s';
            popUpCart.style.boxShadow = '5px 5px 8px #0a0a0a';
            textAdded.style.display = 'flex';
            textAdded.style.fontSize = '18px';
            textAdded.style.alignItems = 'center';
        }, 300);

        setTimeout(() => {
            popReduced();
        }, 2200);

        setTimeout(() => {
            popUpCart.style.opacity = '0';
            popUpCart.style.transition = '0.5s';
        }, 3000);

    });
});