window.onload = function() {
  // Seleciona os elementos do preloader
  var status = document.getElementById('status');
  var preloader = document.getElementById('preloader');
  
  // Esconde a animação de carregamento
  status.style.display = 'none';
  
  // Aguarda 350 ms antes de esconder o preloader
  setTimeout(function() {
    preloader.style.transition = 'opacity 0.5s ease'; // Transição suave
    preloader.style.opacity = 0; // Altera a opacidade para 0

    // Aguarda a transição e depois esconde o preloader
    setTimeout(function() {
      preloader.style.display = 'none';
      document.body.style.overflow = 'visible'; // Restaura o overflow
    }, 500); // Tempo para coincidir com a duração da transição
  }, 1500); // Delay antes de esconder o preloader
};
