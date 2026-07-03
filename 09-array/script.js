
let produtos = ["Meia", "Pá de corte", "Suco de manga", "leite"]
let precos = [8, 15, 12, 6]
let dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let frutas = ['banana', 'maçã', 'uva']
let amigos = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eva', 'Frank']
let idades = [25, 30, 28, 22, 26, 24]
let compras = ['Maçãs', 'Pão', 'Leite']
let numerosImpares = []
let numeros = [3, 6, 9]
let cidades = ['Paris', 'Londres', 'Nova York']


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
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < dias.length; i++) {
        document.getElementById("Resultado").innerHTML += "<p>" + dias[i] + "</p>"
    }
}

function adicionarFeriado() {
    let feriado
    feriado = "Feriado"
    document.getElementById("Resultado").innerHTML = " "

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

function removerSegundoElemento() {
    frutas.splice(1, 1)

    listadeFrutas()
}


function listaAmigos() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < amigos.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + amigos[i] + "</p>"
    }

}
function adicionarAmigos() {

    document.getElementById("Resultado").innerHTML = " "

    let amigos2 = ['leo', 'joao', 'kauan']

    let todosJuntos = amigos.concat(amigos2)

    for (let i = 0; i < todosJuntos.length; i++) {

        document.getElementById("Resultado").innerHTML += "<p>" + todosJuntos[i] + "</p>"

    }


    // document.getElementById("Resultado").innerHTML = " "

    document.getElementById("Resultado").innerHTML += "<p>" + amigos2 + "</p>"


}

function idadesDosAmigos() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < idades.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + idades[i] + "</p>"
    }
}
function somaIdades() {
    let soma = idades[0] + idades[1]

    idadesDosAmigos()
    document.getElementById("Resultado").innerHTML += "<p>" + "Idade do primero e do segundo somados " + "= " + soma + "</p>"



}
function mediaIdades() {

    let soma = idades.reduce((accumulator, idades) => accumulator + idades, 0)

    console.log(soma)

    let media = soma / idades.length
    console.log(media)

}

function listaDeCompras() {

    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < compras.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + compras[i] + "</p>"
    }

}
function adicionarCompras() {

    document.getElementById("Resultado").innerHTML = " "

    compras.push("ovo", "leite")

    listaDeCompras()

}

function removerTerceiraCompras() {

    compras.splice(2, 1)
    listaDeCompras()

}
function testarelemento() {
    let scanner = compras.includes("pão")

    console.log(scanner)

    listaDeCompras()
}

function listaDenumerosImpares() {
    console.log(numerosImpares)
}
function adicinarNumerosImpares() {

    for (let i = 1;  numerosImpares.length < 5; i += 2) {
        numerosImpares.push(i)

    }
    console.log(numerosImpares)
}

function multilicador() {

    let multiplicador = numeros.map((x) => x * 2)

    console.log(multiplicador)
}
function cidades(){
    
}
