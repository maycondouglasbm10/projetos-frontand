let clientes = [];
let editIndex = null;
const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2,'0');
const mes = (hoje.getMonth()+ 1).toString().padStart(2, '0');
const ano = hoje.getFullYear();

document.getElementById("data").innerHTML = `${dia}/${mes}/${ano}`;

//
function adicionar(){
  const tarefa = document.getElementById("bloco").value;
  const botao = document.getElementById("add"); //pega botao
  const data = document.getElementById("calendar").value;

  if (tarefa.trim() === "") return;

  if (editIndex !== null) {
      clientes[editIndex].tarefa = tarefa;
      clientes[editIndex].data = data;
      editIndex = null;

      if(botao) botao.innerText = "Adicionar"; 
  } else {
      clientes.push({tarefa, data, concluido: false});
  }
  document.getElementById("bloco").value = "";
  document.getElementById("calendar").value = "";
  
  salvarDados();
  render();
}
//

//
function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  clientes.forEach((c, i) => {
    lista.innerHTML += ` 

              <li class="${c.concluido? 'feito' : ''}">
              <div class="item">
                <input
                  type = "checkbox" 
                  ${c.concluido ? "checked" : ""}
                  onclick="toggleConcluido(${i})">
                  <span>${c.tarefa} - ${formatarData(c.data)}</span>
              </div>
                <div class="botoes">
                  <button onclick="editar(${i})">Editar</button>
                  <button onclick="remove(${i})">Remover</button>
                </div>
            </li>
        `;
  });
}
//

//
function remove(index) {
    clientes.splice(index, 1);
    salvarDados();
    render();
}
//

//
function salvarDados() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}
//

//
function carregarDados() {
  const dados = localStorage.getItem("clientes");
  if (dados) {
    clientes = JSON.parse(dados);
    render();
  }
}
//

//
function editar(index){
    const cliente = clientes[index];
    const botao = document.getElementById("add");

    document.getElementById("bloco").value = cliente.tarefa;
    document.getElementById("calendar").value = cliente.data || "";
    editIndex = index;

    if (botao) botao.innerText = "Atualizar"; 

}
//

//
function formatarData(data) {
  if (!data) return "Sem data";

  const partes = data.split("-");
  const ano = partes[0];
  const mes = partes[1];
  const dia = partes[2];

  return `${dia}/${mes}/${ano}`;
}

//
function toggleConcluido(index){
  clientes[index].concluido = !clientes[index].concluido;
  salvarDados();
  render();
}

carregarDados();