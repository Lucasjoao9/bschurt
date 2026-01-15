function pedirWhats(produto) {
  const numero = "55SEUNUMERO";
  const msg = `Olá! Gostaria de saber mais sobre ${produto}.`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);
}

const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");

  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});




