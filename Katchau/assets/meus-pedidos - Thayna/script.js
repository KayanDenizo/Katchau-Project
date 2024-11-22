const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

document.querySelectorAll('.icon-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
      const tooltip = item.querySelector('.tooltip');
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = 1;
  });

  item.addEventListener('mouseleave', function() {
      const tooltip = item.querySelector('.tooltip');
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = 0;
  });
});
