function mostrarMensagem() {
    const div = document.getElementById("mensagem");
    div.textContent = "Seja bem-vinda à minha página pessoal!";
 
    // Esconde a mensagem após 5 segundos (5000 milissegundos)
  setTimeout(() => {
    div.textContent = "";
  }, 5000);
}
