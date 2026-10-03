// Pegando os elementos do HTML
var campo = document.getElementById("campo");
var botao = document.getElementById("botao");
var pendentes = document.getElementById("pendentes");
var concluidas = document.getElementById("concluidas");

// Atualiza o número ao lado do nome de cada coluna
function atualizarContadores() {
  document.getElementById("total-pendentes").innerText = pendentes.children.length;
  document.getElementById("total-concluidas").innerText = concluidas.children.length;
}

// Quando clicar no botão "Adicionar"
botao.onclick = function () {
  var texto = campo.value;

  // Se o campo estiver vazio, não faz nada
  if (texto == "") {
    alert("Digite uma tarefa!");
    return;
  }

  // Cria um item da lista
  var item = document.createElement("li");
  item.innerText = texto;

  // Coloca o item na coluna "Pendentes"
  pendentes.appendChild(item);
  atualizarContadores();

  // Limpa o campo
  campo.value = "";
};
