document.getElementById("bt-convertor").addEventListener("click", function () {
    // criar uma lista com 3 personagens
    personagem = [" ", " ", " "];

    vilaoComp = [" ", " ", " "];

    forcaPers = 0;
    forcaComp = 0;

    alert("O array personagem contém: " + personagem);
    for (let i = 0; i < 3; i++) {
        escolhaPerson = prompt("Digite o nome do seu personagem: " + (i + 1));
        personagem[i] = escolhaPerson;
        // calcular a força de cada personagem e depois somar para saber a força do time
        forcaPers = forcaPers + Math.floor(Math.random() * 10) + 1;
        // forcaPerson += Math.floor(Math.random() * 10) + 1 / outra maneira
    }
    console.log("Agora, o array personagem contém: " + personagem);
    console.log("Vilões iniciais; " + vilaoComp);

    for (let i = 0; i < 3; i++) {
        indiceAlea = Math.floor(Math.random() * 10);
        vilaoUsuario = [
            "Suguru Geto ",
            "Sukuna ",
            "Vetto ",
            "Megicula ",
            "Thanos ",
            "Carminha ",
            "Bibi Perigosa",
            "Dexter ",
            "Covinhas",
            "Aizen"
        ];
        vilaoComp[i] = vilaoUsuario[indiceAlea];
        // calcular a força de cada personagem do time do computador
        forcaComp += Math.floor(Math.random() * 10) + 1;
    }
    console.log("Vilões finais: " + vilaoComp);

    // comparar os dois times
    if (forcaPers > forcaComp) {
        alert("Você ganhou a luta! Sua força foi: " + forcaPers)
    }
    else {
        if (forcaPers < forcaComp) {
            alert("Voce perdeu! Vilão ganhou a luta com a força = " + forcaComp)
        }
        else {
            alert("Os dois times tem a mesma força. Empate!")
        }
    }

});
