function carregarComponente(id, arquivo) {
  fetch(arquivo)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// carregar header e footer
document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("header", "components/header.html");
  carregarComponente("footer", "components/footer.html");
});

// função já existente
function verOferta(destino) {
  alert("Você escolheu: " + destino);
}