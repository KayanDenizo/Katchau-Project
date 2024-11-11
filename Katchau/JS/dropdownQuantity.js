const dropdown = document.querySelector('.dropdown');
  const selected = document.querySelector('.dropdown-selected');
  const menuItems = document.querySelectorAll('.dropdown-menu div');

  // Mostra ou esconde o menu ao clicar na área selecionada
  selected.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });

  // Atualiza o texto selecionado e fecha o menu ao clicar em um item
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      selected.textContent = item.dataset.value;
      dropdown.classList.remove('active');
    });
  });

  // Fecha o menu se clicar fora dele
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });