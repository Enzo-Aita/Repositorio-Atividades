let personagem = ["Lúcio Fernando", "Mônica", "Capitão Ganso"]
let personagem2 = ["Lúcio Fernando", "Mônica", "Capitão Ganso", "Gill Bates"]
let personagem3 = ["Peba", "Bilu", "Waldisney"]
let personagem4 = ["Tião", "Junin", "Padre Ernan Buco"]
let personagem5 =["Rivaldo Jesus","Kowalski","GENéZio","Waldisney"]

function listaPersonagens1() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem[i] + "</p>"
    }
}

function exercicio1() {
    personagem.push("Gill Bates")
    listaPersonagens1()


}
function exercicio2() {
    personagem.unshift("Dona Bete")
    listaPersonagens1()
}
function exercicio3() {
    personagem.pop()
    listaPersonagens1()
}
function listaPersonagens2() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem2.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem2[i] + "</p>"
    }
}
function exercicio4() {
    personagem2.shift()
    listaPersonagens2()
}
function exercicioextra() {
    personagem2.push("junin")
    listaPersonagens2()
}
function exercicio5() {
    personagem2.splice(2, 1)
    console.log(personagem2)
    listaPersonagens2()
}
function exercicio6() {
    personagem2.splice(3, 2)
    listaPersonagens2()
}
function listaPersonagens3() {

    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem3.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem3[i] + "</p>"
    }
}
function exercicio7() {
    personagem3.push("Padre Ernan Buco")
    listaPersonagens3()

}
function exercicio8() {
    personagem3.unshift("GENéZio", "Kowalski")
    listaPersonagens3()
}
function exercicio9() {
    let indece = personagem3.indexOf("Waldisney")
    console.log(indece);

}
function exercicio10() {
    let inclui = personagem3.includes("Heitor Tuga")
    console.log(inclui);

}
function exercicio11() {
    personagem3.reverse()
}

function listaPersonagens4() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem4.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem4[i] + "</p>"
    }
}

function exercicio12(){
    personagem4.splice(1,1)
    listaPersonagens4()
}

function exercicio14(){
    personagem4.push("Dona Bete")
    personagem4.unshift("Mônica")
    listaPersonagens4()

}
function listaPersonagens5(){
 document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem5.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem5[i] + "</p>"
    }
}
function exercicio14(){
    personagem5.pop()
    personagem5.shift()
    listaPersonagens5()
}
function exercicio15(){
    let indice = personagem5.indexOf("GENéZio")
    console.log(indice)
}


