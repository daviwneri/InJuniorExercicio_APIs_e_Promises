export const API_URL = "http://localhost:3000/lobos";

// export async function inicializarServidor() {
//     try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//             throw new Error(`Erro ao buscar lobinho.json: ${response.statusText}`);
//         }
//         const lobos = await response.json();
//         localStorage.setItem('lobos', JSON.stringify(lobos));
//         console.log('Lobos inicializados no servidor JSON');
//     } catch (error) {
//         console.error('Erro ao inicializar o servidor:', error);
//     } finally {
//         console.log('Tentativa de inicialização do servidor concluída');
//     }
// }

// npx json-server --watch lobinhos.json --port 3000

export async function getLobos() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const lobos = await response.json();
        return lobos;
    } catch (error) {
        console.error("Error fetching lobos:", error);
        return null;
    }
}

export async function salvarIndex(indexLobo) {
    let indexJson = {
        index: indexLobo
    };
    try {
        let response = await fetch(API_URL_INDEX, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(indexJson)
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        console.log("Índice salvo com sucesso!");
    } catch (error) {
        console.log("Erro ao salvar índice:", error);
    }
}


export async function addLobinho(novoLobo) {
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoLobo)
        });
    } catch (error) {
        console.error('Erro ao *adicionar* lobinho');
    }
}

export async function updateLobinho(id, novosDados){
    try {
        let response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novosDados)
        });
        
    } catch (error) {
        console.error("Erro ao tentar *atualizar* lobinhos.json");
    }
}

export async function deleteLobinho(id){
    try {
        let response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
    } catch (error) {
        console.error("Falha ao *deletar* lobinho");
    }
}
