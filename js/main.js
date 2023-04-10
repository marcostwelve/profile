// Capturando os dados do usuário
const nomeAtual = document.getElementById('current_name');
const idadeAtual = document.getElementById('current_age');
const localizacaoAtual = document.getElementById('current_local');
const bioAtual = document.getElementById('current_bio');

// Capturando o botão
const botaoAtualizar = document.querySelector('.btn__update');

botaoAtualizar.addEventListener('click', (e) => {
    e.preventDefault();
    updateUser(nomeAtual, idadeAtual, localizacaoAtual, bioAtual);
    console.log(bioAtual);
});
