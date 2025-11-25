let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

function salvarContatos() {
    localStorage.setItem("contatos", JSON.stringify(contatos));
}

function exibirContatos() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    contatos.forEach((c, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${c.nome}</td>
                <td>${c.telefone}</td>
                <td>
                    <button onclick="editarContato(${index})">Editar</button>
                    <button onclick="excluirContato(${index})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome === "" || telefone === "") return alert("Preencha tudo!");

    contatos.push({ nome, telefone });
    salvarContatos();
    exibirContatos();

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

function excluirContato(i) {
    contatos.splice(i, 1);
    salvarContatos();
    exibirContatos();
}

function editarContato(i) {
    const novoNome = prompt("Novo nome:", contatos[i].nome);
    const novoTelefone = prompt("Novo telefone:", contatos[i].telefone);

    contatos[i].nome = novoNome;
    contatos[i].telefone = novoTelefone;

    salvarContatos();
    exibirContatos();
}

exibirContatos();
