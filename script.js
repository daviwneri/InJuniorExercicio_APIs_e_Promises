const API_URL = "http://localhost:3000/lobos";

export async function inicializarLocalStorage() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro ao buscar lobinho.json: ${response.statusText}`);
        }
        const lobos = await response.json();
        localStorage.setItem('lobos', JSON.stringify(lobos));
        console.log('Lobos inicializados no localStorage');
    } catch (error) {
        console.error('Erro ao inicializar o localStorage:', error);
    } finally {
        console.log('Tentativa de inicialização do localStorage concluída');
    }
}

export async function getLobos() {
    let response = await fetch(API_URL);
    let lobos = await response.json();
    return lobos;
}

export async function addLobinho(lobos, novoLobo) {
    try {
        let response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoLobo)
        });
    } catch (error) {
        console.error('Erro ao *adicionar* lobinhos.json');
    }
}

export async function updateLobinho(id, novosDados){
    try {
        let response = await fetch(API_URL, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novosDados)
        });
        
    } catch (error) {
        console.error("Erro ao tentar *atualizar* lobinhos.json");
    }
}