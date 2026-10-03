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

// Coloca a tarefa em uma coluna e risca se for "Concluídas"
function moverPara(item, coluna) {
  coluna.appendChild(item);

  if (coluna == concluidas) {
    item.classList.add("feita");
  } else {
    item.classList.remove("feita");
  }

  atualizarContadores();
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

  // Clicar na tarefa troca de coluna
  item.onclick = function () {
    if (item.parentElement == pendentes) {
      moverPara(item, concluidas);
    } else {
      moverPara(item, pendentes);
    }
  };

  // Cria o botão de excluir
  var excluir = document.createElement("button");
  excluir.innerText = "X";
  excluir.className = "excluir";

  // Clicar no X apaga a tarefa
  excluir.onclick = function (evento) {
    evento.stopPropagation(); // não deixa o clique trocar a tarefa de coluna
    item.remove();
    atualizarContadores();
  };

  // Coloca o botão dentro do item e o item na coluna "Pendentes"
  item.appendChild(excluir);
  moverPara(item, pendentes);

  // Limpa o campo
  campo.value = "";
};
