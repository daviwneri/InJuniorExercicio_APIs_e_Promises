import { getLobos, addLobinho } from "./script.js";

async function adicionarLobinho() {
    let inputNome = document.querySelector("#name-input"); 
    let inputIdade = document.querySelector("#age-input"); 
    let inputLink = document.querySelector("#link-input"); 
    let inputDescricao = document.querySelector("#description-input");

    let nome = inputNome.value.trim();
    let idade = inputIdade.value.trim();
    let link = inputLink.value.trim();
    let descricao = inputDescricao.value.trim();

    if (!nome || !idade || !link || !descricao) {
        alert("Preencha todos os espaços");
        return;
    }

    try {
        let lobos = await getLobos();

        let novoId = lobos.length > 0 ? Math.max(...lobos.map(lobo => lobo.id)) + 1 : 1;

        let novoLobo = {
            id: novoId,
            nome: nome,
            idade: idade,
            descricao: descricao,
            imagem: link,
            adotado: false,
            nomeDono: null,
            idadeDono: null,
            emailDono: null
        };

        await addLobinho(novoLobo);
        alert("Lobo adicionado com sucesso!");

        inputNome.value = "";
        inputIdade.value = "";
        inputLink.value = "";
        inputDescricao.value = "";
    } catch (error) {
        console.error("Erro ao adicionar o lobo:", error);
        alert("Erro ao adicionar o lobo. Tente novamente.");
    }
}

let salvar = document.querySelector("#save-button");
salvar.addEventListener("click", adicionarLobinho);