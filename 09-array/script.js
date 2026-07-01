
let produtos = ["Meia", "Pá de corte", "Suco de manga", "leite"]
let precos = [8, 15, 12, 6]
let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let frutas = ['banana', 'maçã', 'uva']


function verProdutos() {
    // console.log(produtos);
    for (let i = 0; i < produtos.length; i++) {
        let c = i + 1
        document.getElementById("Resultado").innerHTML += "<p>" + c + "º:" + produtos[i] + "</p>"
    }
}
function verProdutoscomPrecos() {
    document.getElementById("Resultado").innerHTML = " "
    for (let i = 0; i < produtos.length; i++) {
        let c = i + 1
        document.getElementById("Resultado").innerHTML += "<p>" + c + "º:" + produtos[i] +
            " R$ " + precos[i].toFixed(2).replace(".", ",") + "</p>"
    }
}

function aumentodePrecos() {

    for (let i = 0; i < precos.length; i++) {
        precos[i] = precos[i] * 4
    }
    verProdutoscomPrecos() // att lista na tela
}
function adicionarnovoProduto() {
    let produto
    let preco
    do {
        produto = (prompt("digite o nome do produto"))

    } while (produto == "");

    preco = Number(prompt("Digite o preço do produto"))

    produtos.push(produto)
    precos.push(preco)

    verProdutoscomPrecos()


}
function removerultimoProduto() {
    produtos.pop()
    precos.pop()


    verProdutoscomPrecos() //att lista da tela


}

function diasdasemana() {

    for (let i = 0; i < dias.length; i++) {

        document.getElementById("Resultado").innerHTML += "<p>" + dias[i] + "</p>"


    }

}

function adicionarFeriado() {
    let feriado
    feriado = "Feriado"

    dias.push(feriado)
    diasdasemana()
}
function removerUltimoDia() {
    dias.pop()
    diasdasemana()

}

function listaNumerosPares() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < numerosPares.length; i++) {

        document.getElementById("Resultado").innerHTML += "<p>" + numerosPares[i] + "</p>"

    }
}

function removerTerceiroNumero() {
    numerosPares.splice(2, 1, "12")

    listaNumerosPares()
}

function listadeFrutas() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < frutas.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + frutas[i] + "</p>"
    }
}
function adicionarMorango() {
    let fruta
    fruta = "morango"
    frutas.push(fruta)

    listadeFrutas()
}


