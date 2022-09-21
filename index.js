scrolled = (nav) => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
};

window.onload = () => {
  const nav = document.getElementById('navbar-main');

  scrolled(nav);

  window.onscroll = () => {
    scrolled(nav);
  };
};