// Função para mostrar uma mensagem personalizada
function mostrarMensagem() {
    let nome = document.getElementById("nome").value;

    if (nome === "") {
        document.getElementById("mensagem").innerText =
            "Digite seu nome!";
    } else {
        document.getElementById("mensagem").innerText =
            "Olá, " + nome + "! Bem-vindo ao EcoAgro!";
    }
}
