document.getElementById("bt-convertor").addEventListener("click", function () {
    let idade = prompt("Quantos anos voce tem? ");
      if (idade < 18) {
        alert("Voce nao pode jogar!");
        return;
      }
  
    // alert("Lets bora comecar o jogo!")
  
      if (idade >= 18) {
      let escolhaJogador = prompt("1- Satoru Gojo ou 2- Suguru Geto");
      let escolhaComp = Math.floor(Math.random() * 2) + 1;
  
      // Jogador Satoru, computador Satoru --> empate!
      // Jogador Suguru, computador Suguru --> empate!
      if (escolhaJogador == escolhaComp) {
        alert("Empate!");
        }
  
      // jogador Satoru, computador Suguru --> jogador vence!
      if (escolhaJogador == 1) {
        if (escolhaComp == 2) {
          alert("Satoru Gojo vence!! O maioral.");
        }
      }
  
      // jogador Suguru, computador Satoru --> computador vence!
      if (escolhaJogador == 2) {
        if (escolhaComp == 1) {
          alert("Puts! Computador venceu, Suguru não é pareo ao Satoru!");
        }
      }
      alert("A escolha do computador foi: " + escolhaComp);
      }
  });
  