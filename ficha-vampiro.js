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

      // Controle das seções expansíveis
document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const alvo = document.getElementById(btn.dataset.target);
    const aberto = !alvo.classList.contains("hidden");
    document.querySelectorAll(".secao").forEach(s => s.classList.add("hidden"));
    if (!aberto) alvo.classList.remove("hidden");
  });
});

    }
  });
});

