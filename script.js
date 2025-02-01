const url = "https://placabombaesp32-default-rtdb.firebaseio.com/nota-identificada.json";

async function buscarMensagem() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("mensagem").innerText = data || "Nenhuma mensagem encontrada.";
    } catch (error) {
        document.getElementById("mensagem").innerText = "Erro ao buscar a mensagem.";
        console.error("Erro:", error);
    }
}

buscarMensagem();
