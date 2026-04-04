let clientes = [];
function adicionar(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const cliente = {
        email, 
        senha
    };
    clientes.push(cliente);
    salvarDados();
    render();
}

function render() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    clientes.forEach((c, i) => {
        lista.innerHTML += `
            <li>
                ${c.email} - ${c.senha}
                <button onclick="remove(${i})">X</button>
            </li>
        `;
    });
}

function remove(index) {
    clientes.splice(index, 1);
    salvarDados();
    render();
}

function salvarDados() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

function carregarDados() {
  const dados = localStorage.getItem("clientes");
  if (dados) {
    clientes = JSON.parse(dados);
    render();
  }
}




