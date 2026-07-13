// Primeira Bateria de Array
let personagem = ["Lúcio Fernando", "Mônica", "Capitão Ganso"]
let personagem2 = ["Lúcio Fernando", "Mônica", "Capitão Ganso", "Gill Bates"]
let personagem3 = ["Peba", "Bilu", "Waldisney"]
let personagem4 = ["Tião", "Junin", "Padre Ernan Buco"]
let personagem5 = ["Rivaldo Jesus", "Kowalski", "GENéZio", "Waldisney"]
let personagem6 = ["Bilu", "Mônica", "Gill Bates", "Junin", "Peba"]
let personagem7 = ["Capitão Ganso", "Heitor Tuga", "Dona Bete"]
let personagem8 = ["Padre Ernan Buco", "GENéZio", "Bilu", "Junin"]
let personagem9 = ["Lúcio Fernando", "Rivaldo Jesus", "Mônica", "Capitão Ganso", "Gill Bates", "Junin"]
let personagem10 = ["Tião", "Peba", "Waldisney"];
let personagem11 = ["Gill Bates", "Kowalski", "GENéZio", "Padre Ernan Buco", "Heitor Tuga"];


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

function exercicio12() {
    personagem4.splice(1, 1)
    listaPersonagens4()
}

function exercicio14() {
    personagem4.push("Dona Bete")
    personagem4.unshift("Mônica")
    listaPersonagens4()

}
function listaPersonagens5() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem5.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem5[i] + "</p>"
    }
}
function exercicio14() {
    personagem5.pop()
    personagem5.shift()
    listaPersonagens5()
}
function exercicio15() {
    let indice = personagem5.indexOf("GENéZio")
    console.log(indice)
}
function exercicio16() {
    let inclui = personagem5.includes("Capitão Ganso")
    console.log(inclui)
}
function listaPersonagens6() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem6.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem6[i] + "</p>"
    }
}
function exercicio17() {
    personagem6.splice(0, 2)
    listaPersonagens6()
}
function exercicio18() {
    personagem6.splice(2, 3)
    listaPersonagens6()
}
function listaPersonagens7() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem7.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem7[i] + "</p>"
    }
}
function exercicio19() {
    personagem7.push("Gill Bates")
    personagem7.unshift("Lúcio Fernando")
    listaPersonagens7()
}
function exercicioextra2() {
    personagem7.splice(0, 1)
    listaPersonagens7()
}
function exercicio20() {
    personagem7.reverse()
    listaPersonagens7()
}
function listaPersonagens8() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem8.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem8[i] + "</p>"
    }
}
function exercicio21() {
    let inclui = personagem8.includes("Bilu")
    console.log(inclui);
    listaPersonagens8()
}
function exercicio22() {
    let indece = personagem8.indexOf("Padre Ernan Buco")
    console.log(indece)
    listaPersonagens8()
}
function listaPersonagens9() {

    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem9.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem9[i] + "</p>"
    }
}
function exercicio23() {
    personagem9.splice(2, 2)
    listaPersonagens9()
}
function listaPersonagens10() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem10.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem10[i] + "</p>"
    }
}
function exercicio24() {
    personagem10.push("Bilu")
    personagem10.unshift("Dona Bete")
    personagem10.pop()
    personagem10.reverse()
    listaPersonagens10()
}
function listaPersonagens11() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem11.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem11[i] + "</p>"
    }
}
function exercicio25() {
    let inclui = personagem8.includes("Kowalski")
    console.log(inclui);

    let indece = personagem11.indexOf("Padre Ernan Buco")
    console.log(indece);

    personagem11.splice(2, 1)

    personagem11.reverse()

    listaPersonagens11()
}
// Segunda Bateria de Array

let personagem12 = ["Dona Bete", "Junin", "Gael", "Mônika", "Gill Bates"];
let empresas = ["Macrohard", "Hotel Téo", "Pizza Ruth", "HD Cimentos", "Navegano", "Roller Store", "Be a Bar", "Indra", "Acarajéssica", "Reciclaudio"];
let personagem13 = ["Kowalski", "Heitor Tuga", "Bilu", "Rita Aline", "Caio Pontes", "PeBa"];
let empresas2 = ["Telles Transportes", "Rede Eco", "Pousada Ada", "Resort Orth", "Bergamota", "Amazonia", "Coxão do Santinho", "Casa de Pastel", "Rango Star", "Alibebe", "Ed Som", "Gê Estantes"];
let pessoas = ["Márcia", "Mano Juca", "Lúcio Fernando", "Roque", "Yasmina", "Waldisney", "Lady Murphy"];
let empresas3 = ["Harry Plotter", "Albergue Berg", "Camping Pim", "Ron Bernardo Pet Shop", "Visionery", "Armando Guerra", "Plumas de Avalon", "Romero Brique", "Meia Meia Meia", "Taberna Periódica", "Tião Megastore", "Milhion Pamonharia", "Templo de Salmão"];
let pessoas2 = ["Guilherme Portões", "Jeferson Bezerra", "Pe. Ernan Buco", "Ron Roni", "Seu Bernardo", "Luiza", "Van Grogue", "Rosa Negra"]
let empresas4 = ["Grades Cida", "Food Park Comidas e Clichês", "Churrascaria do Gaúcho", "Batata da Tabata Batataria", "Lanchonete Altas Horas", "Tio do Pavê Sobremesas", "Bolores Bolos e Flores", "Sanduíche-iche da Ruth", "Cereal Killer Cereal Bar", "Restaurante Contra-Filé"]
let pessoas3 = ["Alan Grande", "Tio Paulo", "Dr Auzio", "GENéZio", "Mosta", "Guarda Napoleão"]
let empresas5 = ["Pamdiló Bolos", "Moçambike", "Decorações de Coração", "Clínica Frida Calos", "Taubaté Tábuas", "Vidraçaria Douglass", "Gil Som", "Paty em Ação", "Mi Sungas", "Sombransheila", "Esthertica", "Pricílios", "Hanna Barbearia", "Realisa Alisamentos"];
let pessoas4 = ["Dona Bete", "Kowalski", "Capitão Ganso", "Junin", "Bilu"];
let empresas6 = ["Roda de Roque", "MilkSahakespeare", "Dasamassandro", "Tias Fofinhas", "Horrível Trio", "Pedro Chips", "Frutos e Fritas do Frota", "Taxi Aéreo Mamute Pequenino", "Adomicílios", "Abalada", "Ricárdio"]
let pessoas5  = ["Heitor Tuga", "Frei Dimão", "Gael", "Sarumano", "Márcia", "Mônika", "Yasmina", "Lady Murphy", "Caio Pontes"]
let empresas7 = ["A Bem Suada","Aspirantes Aspiradores","jamanjo.com.br","MA Canudos", "IA","Pé Pequeno","Trajeto Pomar","Vírus da Grife","Paralamas do Seu Celso","Samara Poços"]
let pessoas6 = ["Lúcio Fernando","Ron Roni","Seu Bernardo","Luiza","Roque","Rita Aline","Dr Auzio"]
let empresas8 =["Hotel Téo","Pousada Ada","Resort Orth","Albergue Berg","Camping Pim","Macrohard","Bergamota","Amazonia","Visionery","HD Cimentos","Meia Meia Meia","Coxão do Santinho"];
let pessoas7 = ["Pe. Ernan Buco","Frei Dimão","Capitão Ganso","Junin","PeBa","Mano Juca","Bilu","Waldisney"];
let empresas9 =  ["Casa de Pastel","Lanchonete Altas Horas","Tio do Pavê Sobremesas","Bolores Bolos e Flores","Pizza Ruth","Sanduíche-iche da Ruth","Cereal Killer Cereal Bar","Restaurante Contra-Filé","Rango Star","Acarajéssica","Templo de Salmão","Navegano","Alibebe"];





function listaPersonagens12() {

    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem12.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem12[i] + "</p>"
    }
}
function exercicio26() {
    personagem12.push("Capitão Ganso")
    let inclui = personagem12.includes("Mônika")
    console.log(inclui)
    listaPersonagens12()
}
function listaEmpresa() {

    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas[i] + "</p>"
    }
}
function exercicio27() {
    empresas.shift()
    let indece = empresas.indexOf("HD Cimentos")
    console.log(indece);
    listaEmpresa()

}
function listaPersonagens13() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < personagem14.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + personagem14[i] + "</p>"
    }
}
function exercicio28() {
    personagem14.unshift("Frei Dimão")
    personagem14.pop()
    listaPersonagens14()
}
function listaEmpresas2() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas2.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas2[i] + "</p>"
    }
}
function exercicio29() {
    empresas2.splice(5, 1)
    let indece = empresas2.indexOf("Amazonia")
    console.log(indece)
    listaEmpresas2()
}
function listaPessoas() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas[i] + "</p>"
    }
}
function exercicio30() {
    pessoas.reverse()
    let indece = pessoas.indexOf("Roque")
    console.log(indece)
    listaPessoas()
}
function listaEmpresas3() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas3.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas3[i] + "</p>"
    }
}
function exercicio31() {
    empresas3.push("Banda Jota Qwert")
    empresas3.unshift("Rock in Reels")
    empresas3.reverse()
    listaEmpresas3()
}
function listaPessoas2() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas2.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas2[i] + "</p>"
    }
}
function exercicio32() {
    let indece = Math.floor(Math.random() * pessoas2.length)
    pessoas2.splice(indece, 1)

    let indece2 = Math.floor(Math.random() * pessoas2.length)
    pessoas2.splice(indece2, 1)

    pessoas2.push("Helen Sater")

    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas2.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas2[i] + "</p>"
    }

    console.log(pessoas2)

}
function listaEmpresas4() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas4.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas4[i] + "</p>"
    }
}
function exercicio33() {
    indece = empresas4.indexOf("Lanchonete Altas Horas")
    console.log(indece)
    empresas4.splice(4, 1)
    listaEmpresas4()
}
function listaPessoas3() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas3.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas3[i] + "</p>"
    }
}
function exercicio34() {
    document.getElementById("Resultado").innerHTML = " "

    let inclui = pessoas3.includes("GENéZio")
    pessoas3.shift()
    pessoas3.reverse()
    listaPessoas3()
    console.log(inclui)

}
function listaEmpresas5() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas5.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas5[i] + "</p>"
    }
}
function exercicio35() {
    empresas5.unshift("Floricultura Jorge Tadeu")
    empresas5.splice(7, 1)
    listaEmpresas5()
}
function listaPessoas4() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas4.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas4[i] + "</p>"
    }
}
function exercicio36() {

    pessoas4.push("Gill Bates")
    let inclui = pessoas4.includes("Kowalski")
    let indece = pessoas4.indexOf("Kowalski")
    console.log(indece)
    console.log(inclui);

    listaPessoas4()
}
function listaEmpresas6() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas6.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas6[i] + "</p>"
    }
}
function exercicio37() {
    empresas6.pop()
    empresas6.unshift("Cardiopatinha")
    listaEmpresas6()
}
function listaPessoas5() {
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas5.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas5[i] + "</p>"
    }
}
function exercicio38() {
    pessoas5.reverse()
    let inclui = pessoas5.includes("Sarumano")
    listaPessoas5()
    console.log(inclui);
}
function listaEmpresas7(){
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas7.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas7[i] + "</p>"
    }
}
function exercicio39(){
    empresas7.splice(8,2)
    empresas7.push("Loja de sucos Uso Fruto")
    listaEmpresas7()
}
function listaPessoas6(){
     document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas6.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas6[i] + "</p>"
    }
}
function exercicio40(){
    pessoas6.pop()
    pessoas6.shift()
    let indece = pessoas6.indexOf("Luiza")
    console.log(indece);
    listaPessoas6()
}
function listaEmpresas8(){
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas8.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas8[i] + "</p>"
    }
}
function exercicio41(){
empresas8.unshift("Rede Eco")
let inclui = empresas8.includes("Macrohard")
console.log(inclui);
listaEmpresas8()
}
function listaPessoas7(){
    document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < pessoas7.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + pessoas7[i] + "</p>"
    }
}
function exercicio42(){
    pessoas7.unshift("PeBa")
    pessoas7.reverse()
    listaPessoas7()
}
function listaEmpresas9(){
 document.getElementById("Resultado").innerHTML = " "

    for (let i = 0; i < empresas9.length; i++) {


        document.getElementById("Resultado").innerHTML += "<p>" + empresas9[i] + "</p>"
    }
}
function exercicio43(){
    empresas9.push("Pamdiló Bolos")
        listaEmpresas9()

    let indece = empresas9.indexOf("Pizza Ruth")
    console.log(indece)
}
