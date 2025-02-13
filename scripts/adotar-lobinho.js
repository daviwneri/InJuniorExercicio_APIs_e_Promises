import {updateLobinho, getLobos} from "./script.js";

try {
    let lobos = await getLobos();
} catch (error) {
    console.error("Falha ao tentar *carregar* lobos");
}

let indexLobo = localStorage.getItem("IndexLobo");
localStorage.removeItem("indexLobo");

let imagem = document.querySelector("#imagem");
let foto = document.createElement("img");

foto.src = lobos[indexLobo].imagem;
imagem.append(foto);

let nomeLobo = document.querySelector("#nome_lobo");
let id = document.querySelector("#id_lobo");

nomeLobo.innerText = "Adote o(a) " + lobos[indexLobo].nome;
id.innerText = "ID:" + lobos[indexLobo].id;

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

    updateLobinho(indexLobo, novosDados);

    inputNome.value = "";
    inputIdade.value = "";
    inputEmail.value = "";
    
    let parabens = alert("Lobinho adotado com sucesso!!");

    window.location.href = "./lista.html";

}

let btn_adotar = document.querySelector("#botao_adotar");
btn_adotar.addEventListener("click", adotar);