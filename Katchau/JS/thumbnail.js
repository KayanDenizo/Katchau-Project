function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    const mainImageLink = document.getElementById('zoomLink');

    mainImage.src = thumbnail.href;
    mainImage.alt = thumbnail.alt;

    mainImageLink.href = thumbnail.href;
}


document.addEventListener("DOMContentLoaded", function() {
    const easyzoom = new EasyZoom();
    easyzoom.init();
});

const modal = document.getElementById('modalThumb');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

function openModal(event) {
    event.preventDefault(); 
    modal.style.display = "flex"; 
    modalImg.src = this.href || this.src; 
}

document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', openModal);
    thumbnail.addEventListener('mouseover', function() {
        changeImage(this);
    });
});

const mainImageLink = document.getElementById('zoomLink');
if (mainImageLink) {
    mainImageLink.addEventListener('click', openModal);
}

closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Oculta o modal se Deus quiser
    }
});
