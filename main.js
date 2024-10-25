const form = document.getElementById('form-cadastro');
const nomeContatos = [];
const telContatos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (nomeContatos.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já foi inserido.`);
    } else {
        nomeContatos.push(inputNomeContato.value);
        telContatos.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}