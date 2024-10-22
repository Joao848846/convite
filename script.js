document.getElementById("confirmBtn").addEventListener("click", function () {
  document.getElementById("confirmationMessage").innerText =
    "Presença confirmada! Nos vemos lá!";

  // Mostrar a imagem da rosa
  const roseImage = document.getElementById("roseImage");
  roseImage.style.display = "block";

  // Adicionar a classe 'visible' para animar a exibição da rosa
  setTimeout(() => {
    roseImage.classList.add("visible");
  }, 100);
});
