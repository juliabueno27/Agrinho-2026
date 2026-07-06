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

// Modo escuro
function alternarModo() {
    document.body.classList.toggle("escuro");
}

// Quiz
function verificarQuiz() {
    let pontos = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value == "c") pontos++;
    if (document.querySelector('input[name="q2"]:checked')?.value == "b") pontos++;
    if (document.querySelector('input[name="q3"]:checked')?.value == "a") pontos++;
    if (document.querySelector('input[name="q4"]:checked')?.value == "c") pontos++;
    if (document.querySelector('input[name="q5"]:checked')?.value == "b") pontos++;

    let resultado = "";

    if (pontos == 5) {
        resultado = "🌟 Parabéns! Você acertou todas as perguntas!";
    } else if (pontos >= 3) {
        resultado = "🌱 Muito bom! Você acertou " + pontos + " de 5 perguntas.";
    } else {
        resultado = "📚 Você acertou " + pontos + " de 5. Continue aprendendo sobre agricultura sustentável!";
    }

    document.getElementById("resultadoQuiz").innerHTML = resultado;
}
