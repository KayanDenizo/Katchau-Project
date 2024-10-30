const heart = document.getElementById('heart');

let isFavorited = false;

heart.addEventListener('click', () => {
    isFavorited = !isFavorited; // Alterna o estado de favorito

    if (isFavorited) {
        heart.style.backgroundImage = "url('https://media.istockphoto.com/id/1903985199/pt/vetorial/heart-flat-icon.jpg?s=612x612&w=0&k=20&c=X3_Hyg15SGZKBvlFqbenzk7Y7sFZ8rjAx_N51STGBHk=')"; // Substitua pelo caminho da imagem do coração cheio
    } else {
        heart.style.backgroundImage = "url('https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-rouge.png')"; // Substitua pelo caminho da imagem do coração vazio
    }
});