fetch('db.json')
  .then(response => response.json())
  .then(data => {
    let lobos = data.lobos;

    let index1 = Math.floor(Math.random() * lobos.length);
    let index2 = Math.floor(Math.random() * lobos.length);

    let nome1 = document.querySelector("#nomeExemplo1");
    let idade1 = document.querySelector("#idadeExemplo1");
    let descricao1 = document.querySelector("#descricaoExemplo1");

    let nome2 = document.querySelector("#nomeExemplo2");
    let idade2 = document.querySelector("#idadeExemplo2");
    let descricao2 = document.querySelector("#descricaoExemplo2");

    nome1.innerText = lobos[index1].nome;
    idade1.innerText = lobos[index1].idade;
    descricao1.innerText = lobos[index1].descricao;

    nome2.innerText = lobos[index2].nome;
    idade2.innerText = lobos[index2].idade;
    descricao2.innerText = lobos[index2].descricao;
  })
  .catch(error => console.error("Erro ao carregar os dados:", error));