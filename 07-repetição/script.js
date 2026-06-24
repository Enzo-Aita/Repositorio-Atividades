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



//Imprima a tabuada do 5.
function tabuada5() {
  let i = 0
  while (i < 10) {
    i++
    let tabuada = i * 5
    console.log(tabuada)
  }
}

//Imprima a qualquer tabuada.
function tabuada() {
  let i = 1
  let tabaudaaleatoria = prompt("Digite um número")

  while (i < 11) {
    let tabuada = i * tabaudaaleatoria
    console.log(tabuada)
    i++
  }
}

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
//🐱‍🏍Mostre os números ímpares de 1 a 20.
function numerosimpares1a20() {
  let i = 1
  while (i < 20) {
    console.log(i)
    i += 2
  }
}
//🐱‍🏍Imprima os números de 10 a 1 em ordem decrescente.
function numerosDecrescente() {
  let i = 10
  while (i >= 1) {
    console.log(i)
    i--
  }
}
////🐱‍🏍Imprima os números de 10 a 1 em ordem crescente.
function numerosCrescentes() {
  let i = 1
  while (i <= 10) {
    console.log(i)
    i++
  }
}
//Calcule o fatorial de um número dado.
function fatorial() {

  let numero = prompt("Digite um Número")
  let fatorial = 1
  let i = 1

  while (i <= numero) {
    fatorial = fatorial * i
    i++
    console.log(fatorial);
  }
}

//🐱‍🏍Imprima os números de 1 a 100, 
// substituindo os múltiplos de 3 por "Fizz", 
// os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".
function FizzBuzz() {
  let i = 0
  while (i < 100) {
    i++
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz")
    } else if (i % 3 == 0) {
      console.log("Fizz")
    } else if (i % 5 == 0) {
      console.log("Buzz");

    } else {
      console.log(i);

    }
  }
}

//Faça um programa que calcule o valor da série: 1 + 1/2 + 1/3 + ... + 1/10.
function serie() {
  let i = 1
  soma = 0
  while (i <= 10) {
    soma += 1 / i
    i++
    console.log(soma.toFixed(2));
  }

}
//Conte quantos números pares e ímpares existem de 1 até <um número fornecido pelo usuário>.
function numerosPareseImpares() {
  let i = 1
  let numero = prompt("Digite um número")
  let pares = 0
  let impares = 0

  while (i <= numero) {
    if (i % 2 == 0) {
      pares++
    } else {
      impares++
    }
    i++
    console.log(numero + " quantidade de " + pares + " quantidade de " + impares);
  }
}
//Dada uma lista de números, encontre o maior e o menor valor.
function maiormenor() {
  let i = 0

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

// usando Repetição For


// 1. Utilize um for para calcular a soma dos números de 1 até 10 e exiba o resultado. 

function soma() {
  let resultado = 0
  for (let i = 0; i <= 10; i++) {
    resultado = resultado + i
    console.log(resultado);
  }
}
//2. Crie um programa que mostre a tabuada do número 5, de 5 × 1 até 5 × 10,utilizando um for
function tabuada() {
  for (let i = 0; i < 10; i++) {
    let tabuada = i * 5

    console.log(tabuada);
  }
}
//3. Utilize um for para mostrar o quadrado dos números de 1 até 10.
function quadradoDoNumero() {
  for (let i = 0; i <= 10; i++) {
    let quadrado = i * i
    console.log(quadrado)
  }
}
//4. Considere a palavra “JavaScript”. Utilize um for para exibir cada letra da palavra em uma linha diferente.

function javaScript() {
  let palavra = "javaScript"
  for (let i = 0; i <= 10; i++) {
    console.log(palavra[i])
  }

}
//5. Utilize um for para mostrar todos os múltiplos de 3 entre 1 e 30.

function multiplosDe3() {

  for (let i = 0; i <= 30; i++) {

    if (i % 3 == 0) {
      console.log("multiplos de 3 = " + " " + i)
    }
  }
}

//6. Utilize um for para imprimir 10 asteriscos, um de cada vez, na mesma linha.
function asteriscos() {
  let texto = ""
  for (let i = 0; i <= 10; i++) {
    texto += "*"
    
  }
  console.log(texto)
  
}
//7. Utilize um for para calcular a soma dos números pares entre 1 e 20.

function numerosPares() {
  let pares = 0
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      pares = pares + i
      console.log(pares)
    }
  }
}
//8. Utilize um for para mostrar os números de 0 até 50, contando de 5 em 5.

function numerosDe5em5() {
  for (let i = 0; i <= 50; i++) {
    if (i % 5 == 0) {
      console.log(i)
    }
  }
}
//9. Utilize um for para imprimir a palavra "Olá!" exatamente 8 vezes.
function ola() {
  for (let i = 0; i < 8; i++) {
    let palavra = "Olá!" + i

    console.log(palavra)

  }

}
//10. Calcule a soma de todos os números ímpares entre 1 e 15 utilizando um for.
function numerosImpares() {
  let impares = 0
  let soma = 0
  for (let i = 0; i <= 15; i++) {
    impares = i += 1
    soma = soma + impares
    console.log(soma)
  }
}
//11. Utilize um for para exibir a sequência: 1, 12, 123, 1234, 12345
function sequencia() {

  for (let i = 0; i <= 0; i++) {
    console.log(i)
  }

}
//12 . Utilize um for para calcular o fatorial de 5.
function fatorialDe5(){
  let fatorial = 1
  for(let i = 1; i <= 5; i++){
    fatorial = fatorial * i

    console.log(fatorial)
  }
}





















































































