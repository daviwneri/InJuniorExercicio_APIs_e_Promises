import {updateLobinho, getLobos} from "./script.js";

let indexLobo = localStorage.getItem("IndexLobo");

let lobos;

async function carregarLobo() {
    try {
        lobos = await getLobos();

        let imagem = document.querySelector("#imagem");
        let foto = document.createElement("img");

        foto.src = lobos[indexLobo].imagem;
        imagem.append(foto);

        let nomeLobo = document.querySelector("#nome_lobo");
        let id = document.querySelector("#id_lobo");

        nomeLobo.innerText = "Adote o(a) " + lobos[indexLobo].nome;
        id.innerText = "ID: " + lobos[indexLobo].id;

        let btn_adotar = document.querySelector("#botao_adotar");
        btn_adotar.addEventListener("click", adotar);
        
    } catch (error) {
        console.error("Erro ao carregar lobo:", error);
    }
}

carregarLobo();

/*----------------------------------------------------*/

function adotar(){
    let inputNome = document.querySelector("#nome_usuario");
    let nomeDono = inputNome.value;

    let inputIdade = document.querySelector("#idade_usuario");
    let idadeDono = inputIdade.value;

    let inputEmail = document.querySelector("#email_usuario");
    let emailDono = inputEmail.value;

    if (!nomeDono || !idadeDono || !emailDono){
        let alerta = alert("Preencha todos campos por favor");
        return;
    }

    let novosDados = {
        adotado: true,
        nomeDono: nomeDono,
        idadeDono: idadeDono,
        emailDono: emailDono

    };

    let id = lobos[indexLobo].id
    alert("Lobinho adotado com sucesso!!");
    updateLobinho(novosDados, id);

    inputNome.value = "";
    inputIdade.value = "";
    inputEmail.value = "";

    window.location.href = "./lista.html";

}


