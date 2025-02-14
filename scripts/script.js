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

export async function updateLobinho(novosDados, id){
    try {
        let response = await fetch(API_URL + `/` + id,{
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novosDados)
        });
        if (!response.ok) {
            let errorMessage = await response.text();
            throw new Error(`Erro ${response.status}: ${errorMessage}`);
        }
    } catch (error) {
        console.error("Erro ao tentar *atualizar* lobinhos.json");
    }
}

export async function deleteLobinho(id){
    try {
        let response = await fetch(API_URL + `/` + id,{
            method: "DELETE",
        });

        console.log(`Lobo ${id} deletado com sucesso.`);
    } catch (error) {
        console.error("Falha ao *deletar* lobinho");
    }
}
