let cont = 0
function incrementarContagem() {
    // let cont = 0
    cont = cont + 1
    document.getElementById("p-contagem").innerHTML = cont

} 
function matarContagem(){
        // document.getElementById("p-contagem").innerHTML = 

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

