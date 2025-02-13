export const API_URL = "http://localhost:3000/?";

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
    let response = await fetch(API_URL, {
        method: "GET",
        headers: {"Content-Type": "	text/html; charset=utf-8"},
    });
    let lobos = await response.json();
    console.log(lobos);
    return lobos;
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