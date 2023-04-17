//Capturando os novos dados do usuário
const novoNome = document.getElementById('new_name')
const novaIdade = document.getElementById('new_age');
const novaLocalizacao = document.getElementById('new_local');
const novaBio = document.getElementById('new_bio');


//Função para realizar as mudanças de dados
function updateUser(nome, idade, localizacao, bio) {
    
    
    if(novoNome.value  == "" || novaIdade.value == "" || novaLocalizacao.value == "" || novaBio.value == "") {
        modalFailed();
        clearField();
    }

    else {
        //Inserindo os novos dados
        nome.textContent = novoNome.value;
        idade.textContent = novaIdade.value;
        localizacao.textContent = novaLocalizacao.value;
        bio.value = novaBio.value;
        modalSucess();
        clearField();
    }

}

//Função Para limpar os campos de atualização
function clearField() {
        novoNome.value = "";
        novaIdade.value  = "";
        novaLocalizacao.value = "";
        novaBio.value = "";
}