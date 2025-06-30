const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav-list-container');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');

  const icon = menuIcon.querySelector('i');
  if (menuIcon.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});
