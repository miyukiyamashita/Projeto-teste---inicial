document.getElementById("bt-convertor").addEventListener("click", function () {
    let idade = prompt("Quantos anos voce tem? ");
    if (idade < 18) {
        alert("Voce nao pode jogar!");
        return;
    }

    ganhou = 0 // se for 1 perdeu, se for 0 ganhou

    for (let rodada = 1; rodada <= 3; rodada++) {
        console.log("Rodada: " + rodada);
        let jogador = prompt("Nivel " + rodada, "escolha vidro(1,2 ou 3?)");
        let pisoF = Math.floor(Math.random() * 3) + 1;

        if (jogador == pisoF) {
            alert("Vidro quebrou! Fim de jogo.");
            rodada = 10000;
            ganhou = 1;
        } else {
            alert("Congrats! Você passou para o próximo nível! " + pisoF);
        }
    }
    if (ganhou == 0) {
        alert("Arrasou divx!")
    }


});
