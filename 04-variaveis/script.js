let contD4 = 0
let contD6 = 0
let contD10 = 0
let contD12 = 0
let contD20 = 0

function rolarDado(lados) {

    let resultado = Math.floor(Math.random() * lados) + 1

    total = total + resultado

    document.getElementById("total").innerHTML = total

    document.getElementById("resultado").innerHTML =
        "D" + lados + " tirou " + resultado

    document.getElementById("historico").innerHTML +=
        "D" + lados + ": " + resultado + "<br>"



    // CONTADORES

    if (lados == 4) {

        contD4++
        document.getElementById("contD4").innerHTML = contD4

    }

    else if (lados == 6) {

        contD6++
        document.getElementById("contD6").innerHTML = contD6

    }

    else if (lados == 10) {

        contD10++
        document.getElementById("contD10").innerHTML = contD10

    }

    else if (lados == 12) {

        contD12++
        document.getElementById("contD12").innerHTML = contD12

    }

    else if (lados == 20) {

        contD20++
        document.getElementById("contD20").innerHTML = contD20

    }

}
function resetar() {

    total = 0

    contD4 = 0
    contD6 = 0
    contD10 = 0
    contD12 = 0
    contD20 = 0


    document.getElementById("total").innerHTML = 0

    document.getElementById("resultado").innerHTML = "-"

    document.getElementById("historico").innerHTML = ""

    document.getElementById("contD4").innerHTML = 0
    document.getElementById("contD6").innerHTML = 0
    document.getElementById("contD10").innerHTML = 0
    document.getElementById("contD12").innerHTML = 0
    document.getElementById("contD20").innerHTML = 0

}




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

        document.getElementById("historico").innerHTML +=
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

