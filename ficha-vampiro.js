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

// ===========================
// 🔥 CONTROLE DE SEÇÕES
// ===========================
document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const alvo = document.getElementById(btn.dataset.target);
    const aberto = !alvo.classList.contains("hidden");
    document.querySelectorAll(".secao").forEach(s => s.classList.add("hidden"));
    if (!aberto) alvo.classList.remove("hidden");
  });
});

// ===========================
// 💾 SALVAR E CARREGAR DADOS
// ===========================

// Função para salvar automaticamente
function salvarFicha() {
  const campos = document.querySelectorAll("input, textarea");
  let dados = {};
  campos.forEach(campo => {
    if (campo.type === "checkbox") {
      dados[campo.id] = campo.checked;
    } else {
      dados[campo.id] = campo.value;
    }
  });
  localStorage.setItem("fichaVampiro", JSON.stringify(dados));
}

// Função para carregar os dados
function carregarFicha() {
  const dadosSalvos = localStorage.getItem("fichaVampiro");
  if (!dadosSalvos) return;
  const dados = JSON.parse(dadosSalvos);
  Object.keys(dados).forEach(id => {
    const campo = document.getElementById(id);
    if (campo) {
      if (campo.type === "checkbox") {
        campo.checked = dados[id];
      } else {
        campo.value = dados[id];
      }
    }
  });
}

// Observa mudanças e salva automaticamente
function ativarAutoSave() {
  const campos = document.querySelectorAll("input, textarea");
  campos.forEach(campo => {
    campo.addEventListener("input", salvarFicha);
    campo.addEventListener("change", salvarFicha);
  });
}

// Função para limpar manualmente (opcional)
function limparFicha() {
  if (confirm("Tem certeza que deseja limpar toda a ficha?")) {
    localStorage.removeItem("fichaVampiro");
    document.querySelectorAll("input, textarea").forEach(campo => {
      if (campo.type === "checkbox") campo.checked = false;
      else campo.value = "";
    });
  }
}

// ===========================
// 🚀 EXECUÇÃO AO CARREGAR
// ===========================
window.addEventListener("DOMContentLoaded", () => {
  carregarFicha();
  ativarAutoSave();
  console.log("Ficha carregada com salvamento automático ativado!");
});



