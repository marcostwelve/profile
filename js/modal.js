//Capturando os dados do modal
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

//Funcão para mostrar o Modal
function modalFailed() {
   toogleModal();
    modal.innerHTML = `
    <div class="modal__body">
        <p>
            É necessário preencher todos os campos!
        </p>
        <button id="btn__modal" onclick="closeBtn();">Fechar</button>
    </div>
    `
}

function modalSucess() {
    toogleModal();
    modal.innerHTML = `
    <div class="modal__body">
        <p>
            Perfil atualizado com sucesso!
        </p>
        <button id="btn__modal" onclick="closeBtn();">Fechar</button>
    </div>
     `
}

// Função para adicionar e remover a classe hide (Exibindo e fechando o modal)
function toogleModal() {
    [fade, modal].forEach(element => {
        element.classList.toggle("hide");
    });
}

//Função para fechar o modal
function closeBtn() {
    if(fade.className == "" && modal.className == "") {
        fade.classList.add("hide");
        modal.classList.add("hide");
    }
}
