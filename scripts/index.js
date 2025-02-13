import {getLobos} from "./script.js";

async function exibirLobos() {
    let lobos = await getLobos();

    if (lobos.length === 0) {
        console.error("Nenhum lobo encontrado.");
        return;
    }

    let index1 = Math.floor(Math.random() * lobos.length);
    let index2 = Math.floor(Math.random() * lobos.length);

    let nome1 = document.querySelector("#nomeExemplo1");
    let idade1 = document.querySelector("#idadeExemplo1");
    let descricao1 = document.querySelector("#descricaoExemplo1");

    let nome2 = document.querySelector("#nomeExemplo2");
    let idade2 = document.querySelector("#idadeExemplo2");
    let descricao2 = document.querySelector("#descricaoExemplo2");

    nome1.innerText = lobos[index1]?.nome || "Nome não disponível";
    idade1.innerText = lobos[index1]?.idade || "Idade não disponível";
    descricao1.innerText = lobos[index1]?.descricao || "Descrição não disponível";

    nome2.innerText = lobos[index2]?.nome || "Nome não disponível";
    idade2.innerText = lobos[index2]?.idade || "Idade não disponível";
    descricao2.innerText = lobos[index2]?.descricao || "Descrição não disponível";
}

exibirLobos();