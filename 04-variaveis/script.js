let totalRecebido = 0
let totalRepasse = 0
let faturamentoSandro = 0
let totalSeguradoras = 0
let quantidadeClientes = 0

function registrarServico(){

    let valor =
    Number(document.getElementById("inputValor").value)

    let indicacaoCelso =
    document.getElementById("checkCelso").checked

    let seguradora =
    document.getElementById("checkSeguro").checked



    if(valor <= 0){

        alert("Digite um valor válido")

    }

    else{

        quantidadeClientes++

        let valorFinal = valor

        let repasse = 0



        // DESCONTO SEGURADORA

        if(seguradora == true){

            valorFinal = valor * 0.70

            totalSeguradoras =
            totalSeguradoras + valorFinal

        }



        // DESCONTO A CADA 10 CLIENTES

        if(quantidadeClientes % 10 == 0){

            valorFinal = valorFinal * 0.95

        }



        // REPASSE PARA SEU CELSO

        if(indicacaoCelso == true && seguradora == false){

            repasse = valorFinal * 0.10

            totalRepasse =
            totalRepasse + repasse

        }



        totalRecebido =
        totalRecebido + valorFinal



        faturamentoSandro =
        faturamentoSandro + (valorFinal - repasse)



        // ATUALIZA TELA

        document.getElementById("totalRecebido").innerHTML =
        "Total recebido: R$" + totalRecebido.toFixed(2)

        document.getElementById("repasseCelso").innerHTML =
        "Repasse Seu Celso: R$" + totalRepasse.toFixed(2)

        document.getElementById("faturamento").innerHTML =
        "Faturamento Sandro: R$" + faturamentoSandro.toFixed(2)

        document.getElementById("seguradoras").innerHTML =
        "Total seguradoras: R$" + totalSeguradoras.toFixed(2)

        document.getElementById("clientes").innerHTML =
        "Clientes atendidos: " + quantidadeClientes



        // HISTÓRICO

        document.getElementById("historicoCaixa").innerHTML +=
        "Cliente " + quantidadeClientes +
        " | Valor final: R$" + valorFinal.toFixed(2) +
        " | Repasse: R$" + repasse.toFixed(2) +
        "<br>"



        // LIMPA INPUT

        document.getElementById("inputValor").value = ""

        document.getElementById("checkCelso").checked = false

        document.getElementById("checkSeguro").checked = false

    }

}





let totalRolado = 0

function rolarDado(numero){
    // console.log(numero);
    let dado = Math.ceil(Math.random()*numero)
    document.getElementById('outputUltima').innerHTML = dado
    document.getElementById("historicoDado").innerHTML += "<span>d" + numero + ":" + dado + "<span>"
    totalRolado += dado
    document.getElementById('outputTotal').innerHTML = totalRolado
}
function resetar() {
    totalRolado = 0
    document.getElementById('outputUltima').innerHTML = 'Não jogou ainda'
    document.getElementById('outputTotal').innerHTML = 0
    document.getElementById()
}

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

