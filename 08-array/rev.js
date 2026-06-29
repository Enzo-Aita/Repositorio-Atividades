function rodarWhile() {
    let i = 0
    while (i < 50) {
        i++
        console.log(i);
    }
}

function rodarFor() {
    for (let i = 0; i <= 50; i++) [

        console.log(i)

    ]
}

function rodarDoWhile() {
    let i = 0
    do {
        console.log(i);
        i++
    } while (i <= 50);
}

function exemploDoWhile() {
    let idade
    do {

        idade = Number(prompt("Digite sua idade"))
        if(idade < 18){
            alert("Idade errada") 
            alert("Digite direito!")}
    } while (idade < 18);

    alert("entrou no sistema")
}

function DoWhileExemplo() {
    let idade
    let tentativas = 3
    do {

        idade = Number(prompt("Digite sua idade"))
        tentativas--
        console.log(tentativas);
        
    } while (idade < 18 && tentativas > 0);

    alert("entrou no sistema")
}

