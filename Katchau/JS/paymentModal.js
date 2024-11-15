document.addEventListener("DOMContentLoaded", () => {
    const showModalButton = document.getElementById("unique-show-payment-modal");
    const modal = document.getElementById("unique-payment-modal");
    const closeModalButton = document.getElementById("unique-close-payment-modal");

    showModalButton.addEventListener("click", () => {
        modal.classList.add("visible");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });
});
