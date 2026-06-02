let dinoSorteado = ""
let escolherDino = ""
let

function testar() {
    let n = parseInt(Math.random() * 10)
    console.log(n)

    dinoSorteado = convertarParaDino(n)
    console.log(n);


}

function escolherDino() {
    escolherDino = n
    dinoSorteado = parseInt(Math.random() * 10)
    console.log(escolherDino);
    console.log(escolherDino);

    if(escolherDino == dinoSorteado){
        alert("!ganhou!!")
    }

    document.getElementById("outDinoEscolhido").innerHTML = convertarParaDino(dinoSorteado)
        document.getElementById("outDinoEscolhido").innerHTML = convertarParaDino(escolherDino)

    
}

function convertarParaDino(n) {
    let dino = ""

    if (n == 0) {
        dino = "Espinossauro"
    } else if (dino == 1) {
        dino = "T-Rex"
    } else if (dino == 2) {
        dino = "Braquiossauro"
    } else if (dino == 3) {
        dino = "Velocirraptor"
    } else if (dino == 4) {
        dino = "Estegossauro"
    } else if (dino == 5) {
        dino = "Triceratopo"
    } else if (dino == 6) {
        dino = "Anquilossauro"
    } else if (dino == 7) {
        dino = "Parassauro"
    } else if (dino == 8) {
        dino = "Alossauro"
    } else if (dino == 9) {
        dino = "Carnotauro"
    }

    console.log(dino)

}