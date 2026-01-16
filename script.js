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


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o pedido:%0A%0A";
  let total = 0;

  carrinho.forEach((item, index) => {
    mensagem += `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}%0A`;
    total += item.preco;
  });

  mensagem += `%0A*Total:* R$ ${total.toFixed(2)}`;

  const telefone = "554791631238"; // <-- SEU WHATS AQUI
  const url = `https://wa.me/${telefone}?text=${mensagem}`;

  window.open(url, "_blank");

  localStorage.removeItem("carrinho");
  carrinho = [];
}



