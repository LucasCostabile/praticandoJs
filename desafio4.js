function verificarMes() {
    let numero = parseInt(document.getElementById("numeroInput").value);

    if (numero >= 1 && numero <= 12) {
        let meses = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro",
            "Outubro", "Novembro", "Dezembro"
        ];

        let nomeDoMes = meses[numero - 1];

        document.getElementById("resultado").textContent = "O número " + numero + " corresponde ao mês de " + nomeDoMes + ".";
    } else {
        document.getElementById("resultado").textContent = "Valor de mês incorreto.";
    }
}