// ================================
// Ficha de Vampiro: A Máscara 3ª Edição
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const campos = document.querySelectorAll("input, textarea");
  const salvar = document.getElementById("salvar");
  const limpar = document.getElementById("limpar");

  // Carregar dados salvos
  campos.forEach(campo => {
    const salvo = localStorage.getItem(campo.id);
    if (salvo) campo.value = salvo;
  });

  // Salvar ficha
  salvar.addEventListener("click", () => {
    campos.forEach(campo => localStorage.setItem(campo.id, campo.value));
    alert("Ficha salva com sucesso!");
  });

  // Limpar ficha
  limpar.addEventListener("click", () => {
    if (confirm("Deseja apagar todos os dados da ficha?")) {
      campos.forEach(campo => {
        campo.value = "";
        localStorage.removeItem(campo.id);
      });
    }
  });
});
