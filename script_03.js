document.getElementById("bt-convertor").addEventListener("click", function () {
    let idade = prompt("Quantos anos voce tem? ");
    if (idade < 18) {
      alert("Voce nao pode jogar!");
      return;
    }
    let rodada = 1;
    while (rodada <= 3) {
      console.log("Rodada: " + rodada);
      let jogador = prompt("Nivel " + rodada, "escolha vidro(1,2 ou 3?)");
      let pisoF = Math.floor(Math.random() * 3) + 1;
  
      if (jogador == pisoF) {
        alert("Vidro quebrou! Fim de jogo.");
        rodada = 10000;
      } else {
        alert("Congrats! Piso quebrado estava na ponte: " + pisoF);
      }
      rodada = rodada + 1;
    }
  });
  