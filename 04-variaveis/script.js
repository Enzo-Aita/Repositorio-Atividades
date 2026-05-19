
let total = 0
function registrarVenda() {
    let valor = Number(document.getElementById("inputVenda").value)

    total = total + valor
    document.getElementById("totalVendido").innerHTML = "Total de vendas: R$" + total.toFixed(2)

    document.getElementById("inputVenda").value = ""
    document.getElementById("inputVenda").focus()
    document.getElementById("listaVendas").innerHTML += "R$" + valor.toFixed(2) + "<br>"

    console.log(valor)

}
let cont = 0
function incrementarContagem() {
    cont = cont + 1
    document.getElementById("p-contagem").innerHTML = cont

}
function decrementarContagem() {
    cont--
    document.getElementById("p-contagem").innerHTML = cont

}
function somar10() {
    cont = cont + 10
    document.getElementById("p-contagem").innerHTML = cont
}
function somar2() {
    cont += 2
    document.getElementById("p-contagem").innerHTML = cont


}
function zerarContagem() {
    cont = 0
    document.getElementById("p-contagem").innerHTML = cont

}
let global = "Eu sou um avariável global :/"

function funcao1() {

    let local = "sou uma variável local :D"
    console.log(local);
    console.log(global);

}
function funcao2() {

    console.log(global);
    // console.log(local);
}

// funcao1()
// funcao2()

