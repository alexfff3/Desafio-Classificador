    let nome="GRONK";
    let experiencia=6000;
    let ranking=[
        ["Ferro", " Se XP for menor do que 1.000"],
        ["Bronze"," Se XP for entre 1.001 e 2.000"],
        ["Prata"," Se XP for entre 2.001 e 5.000"],
        ["Ouro"," Se XP for entre 5.001 e 7.000"],
        ["Platina"," Se XP for entre 7.001 e 8.000"],
        ["Ascendente"," Se XP for entre 8.001 e 9.000 "],
        ["Imortal"," Se XP for entre 9.001 e 10.000"],
        ["Radiante"," Se XP for maior ou igual a 10.001"]
    ];

    if (experiencia <= 1000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[0][0]);
    } else if (experiencia >= 1001 && experiencia <= 2000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[1][0]);
    } else if (experiencia >= 2001 && experiencia <= 5000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[2][0]);
    } else if (experiencia >= 5001 && experiencia <= 7000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[3][0]);
    } else if (experiencia >= 7001 && experiencia <= 8000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[4][0]);
    } else if (experiencia >= 8001 && experiencia <= 9000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[5][0]);
    } else if (experiencia >= 9001 && experiencia <= 10000) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[6][0]);
    } else if (experiencia >= 10001) {
        console.log("O Herói de nome " + nome + " está no nível de " + ranking[7][0]);
    }

    for (let i = 1; i < ranking.length; i++) {
        console.log(i+" "+ranking[i])}