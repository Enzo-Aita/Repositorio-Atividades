// let contador = 0 // inicialização

// while(contador < 10){ // condição de repetição
//     alert("conatador: " + contador)
//     contador++ // conatagem
// }

// let peso

// peso = Number(prompt("Digite o pese: "))

// if(peso > 1.1 || peso < 0.9){
//   alert("Fora tolerância do peso")  
// }
// let contador = 0
// while(conatdor < 10 ){
// }

// let total = 0
// let i = 0
// while (i < 4) {
//   i++
//   let nomeProduto = prompt("Digite o nome do produto")
//   let preco = Number(prompt("Digite o preço do : " + i + " º produto: "))
//   total = total + preco
//   document.getElementById("total").innerHTML += "Nome Produto: " + nomeProduto + " R$ " + preco.toFixed(2) + "<br>"
// } 
// alert(total)















//Faça um programa que calcule o quadrado de cada número de 1 a 10.

function quadradoNumero() {
  let i = 0
  while (i < 10) {
    i++
    let quadrado = i * i
    console.log(i + ": " + quadrado)
  }

}

//🐱‍🏍Calcule a soma dos números de 1 a 100.
function somaNumeros() {
  let i = 0
  let soma = 0
  while (i < 100) {
    i++
    let somaantigo = soma
    soma = soma + i
    console.log(somaantigo + " + " + i + " = " + soma)

  }
}
function numerosimpares1a20() {
  let i = 1
  while (i < 20) {
    console.log(i)
    i += 2



  }


}

function numerosDecrescente() {
  let i = 10
  while (i >= 1) {
    console.log(i)
    i--
  }
}















































































//☣️☣️☣️ Imprima os números primos de 1 a 50.
function numerosPrimos() {
  let numero = 2;
  while (numero <= 20) {
    let i = 2;
    let primo = true;

    while (i < numero) {
      if (numero % i == 0) {
        primo = false;
        break;
      }
      i++;
    }

    if (primo) {
      console.log(numero);
    }

    numero++;
  }
}