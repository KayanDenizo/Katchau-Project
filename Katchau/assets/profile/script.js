document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profile-pic');
    const profileImage = document.getElementById('profile-image');
    const editName = document.getElementById('profile-name');
    const editInput = document.getElementById('edit-name-input');
    const settings = document.getElementById('settings');
    const orders = document.getElementById('orders');
    const feedback = document.getElementById('feedback');
    const contact = document.getElementById('contact');

    profilePic.addEventListener('click', function() {
        document.getElementById('upload').click();
    });

    document.getElementById('upload').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.setAttribute('src', e.target.result);
                profilePic.querySelector('.profile-placeholder').style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    });

    editName.addEventListener('click', function() {
        editInput.value = editName.textContent.trim();
        editName.classList.add('hidden');
        editInput.classList.remove('hidden');
        editInput.focus();
    });

    editInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            editName.textContent = editInput.value.trim() || 'Seu Nome';
            editInput.classList.add('hidden');
            editName.classList.remove('hidden');
        }
    });


});