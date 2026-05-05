let resposta = document.getElementById('resultado')


function jogoAdivinhacao() {
    // INFOS
    let numeroAleatorio = Math.ceil(Math.random() * 10)
    let chute

    // ENTRADAS
    chute = prompt("Tente adivinhar o número entre 1 e 10:");
    // PROCESSAMENTOS

    // SAIDAS
    if (Number(chute) === numeroAleatorio) {
        resposta.innerHTML = " Parabéns! Você acertou em cheio!"
    } else {
        resposta.innerHTML = "Que pena! O número correto era " + numeroAleatorio + "."
    }
}
function diasSemana() {
    // INFOS
    let numero
    let dia

    // ENTRADAS - Convertendo para número com parseInt
    numero = Number(prompt("Digite um número de 1 a 7 para saber o dia da semana:"))

    // PROCESSAMENTOS
    if (numero == 1) {
        dia = "Domingo";
    } else if (numero == 2) {
        dia = "Segunda-feira"
    } else if (numero == 3) {
        dia = "Terça-feira"
    } else if (numero == 4) {
        dia = "Quarta-feira"
    } else if (numero == 5) {
        dia = "Quinta-feira"
    } else if (numero == 6) {
        dia = "Sexta-feira"
    } else if (numero == 7) {
        dia = "Sábado"
    } else {
        dia = "Número inválido! Escolha entre 1 e 7."
    }

    // SAIDAS
    resposta.innerHTML = dia
}
function verificandoNumerosPares() {
    // INFOS 
    let mensagem

    //ENTRADAS
    let numero = Number(prompt("Digite um número inteiro:"))


    // PROCESSAMENTO
    if (numero % 2 == 0) {
        mensagem = "O número " + numero + " é PAR."
    } else {
        mensagem = "O número " + numero + " é ÍMPAR."
    }

    // SAIDAS
    resposta.innerHTML = mensagem;
}
function calculadoraSimples() {
    // ENTRADAS
    let num1 = Number(prompt("Digite o primeiro número:"))
    let operacao = prompt("Digite a operação (+, -, *, /):")
    let num2 = Number(prompt("Digite o segundo número:"))

    let resultado

    // PROCESSAMENTO
    if (operacao === "+") {
        resultado = num1 + num2
    } else if (operacao === "-") {
        resultado = num1 - num2
    } else if (operacao === "*") {
        resultado = num1 * num2
    } else if (operacao === "/") {
        // Verificação para não dividir por zero
        if (num2 !== 0) {
            resultado = num1 / num2
        } else {
            resultado = "Erro: Divisão por zero!"
        }
    } else {
        resultado = "Operação inválida!"
    }

    // SAÍDAS
    let mensagemFinal = "Resultado: " + resultado

    resposta.innerHTML = mensagemFinal

}
function validarSenha() {
    // ENTRADAS
    let senha
    let mensagem;
    // ENTRADA
    senha = prompt("Crie uma nova senha (mínimo de 8 caracteres):");
    // PROCESSAMENTO
    if (senha.length >= 8) {
        mensagem = " Senha válida e segura!";
    } else {
        mensagem = "Erro: deve ter pelo menos 8 caracteres.";
    }

    // SAIDAS
    resposta.innerHTML = mensagem;
}
function verificarIdade() {
    // INFOS
    let idade

    // ENTRADAS
    idade = Number(prompt("Digite sua idade: "))
    // PROCESSAMENTOS

    // SAIDAS
    if (idade >= 18) {
        resposta.innerHTML = "Você e maior de idade"
    } else {
        resposta.innerHTML = "Você e menor de idade"
    }
}
function verificarProvisoes() {
    // infos
    let marujos, comida
    let comidaPorMarujo
    // entradas
    marujos = Number(prompt("Quantidade de marujos:"))
    comida = Number(prompt("Quilos de comida:"))
    // processamentos
    comidaPorMarujo = comida / marujos
    // saidas
    if (marujos >= 10 && comidaPorMarujo >= 1.5) { // ||
        document.getElementById('resultado').innerHTML = "<br>Provisões suficientes. <br>Rumo ao horizonte!"
    } else {
        document.getElementById('resultado').innerHTML = "<br>Algo está errado. <br>Posseidom não quer ninguém no mar hoje."
    }

}
function calcularChances() {
    // alert("Aqui vou calcular as chances das criancinhas...")

    document.getElementById("resultado").innerHTML = "Resultado das chances..."
}
function calcularPrecoBrique() {
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS 
    precoCompra = Number(prompt("Preço de compra:"))
    // PROCESSAMENTO
    precoVenda = precoCompra * 3
    // SAIDAS
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda: R$" + precoVenda.toFixed(2));

    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)
}
function calcularNotas() {
    // INFOS
    let notas
    // ENTRADA
    notas = Number(prompt("Digite sua nota"))
    // PROCESSAMENTO
    // SAIDAS
    if (notas >= 81 && notas <= 100) {
        resposta.innerHTML = "Nota: A"
    } else if (notas >= 61 && notas <= 80) {
        resposta.innerHTML = "Nota: B"
    } else if (notas >= 41 && notas <= 60) {
        resposta.innerHTML = "Nota: C"
    } else if (notas >= 21 && notas <= 40) {
        resposta.innerHTML = "Nota: D"
    } else (notas >= 0 && notas <= 20)
        resposta.innerHTML = "Nota: E"
}
function comparacaoNumeros(){
    // INFOS
    let numero1
    let numero2
    // ENTRADAS
    numero1 = Number(prompt("Digite o primeiro número: "))
    numero2 = Number(prompt("Digite o segundo número: "))

    // PROCESSAMENTO
    if(numero1 > numero2){
        resposta.innerHTML = "Número 1 é Maior"

    } else {
        resposta.innerHTML ="Número 2 é Maior"
    }
    // SAIDAS
}
function mensagemSecreta(){
    // INFOS
    let senha
    // ENTRADAS
    senha = prompt("Digite sua senha: ")
    // PROCESSAMENTO
    // SAIDAS
    if(senha == "abracadabra"){
        resposta.innerHTML = "Senha correta"
    } else {
        resposta.innerHTML ="Senha incorreta"
    }

}
function anoBissexto(){
    // INFOS
    let ano
    // ENTRADAS
    ano = Number(prompt("Digite o ano "))
    // PROCESSAMENTO
    // SAIDAS
    if (ano === 366) {
        resposta.innerHTML = "ano Bissexto"
    } else {
        resposta.innerHTML = "Não é ano Bissexto"
        
    }
}
function decisaoCompra(){
    // INFOS
    let preco
    let saldo
    // ENTRADAS
    preco = Number(prompt("Digite o preço da compra: "))
    saldo = Number(prompt("Digite o Saldo da conta: "))
    // PROCESSAMENTO
    // SAIDAS
    if (preco > saldo) {
        resposta.innerHTML = "Saldo insuficiente"
    } else {
        resposta.innerHTML = "Saldo suficiente"
        
    }
}
function idadeCachoro(){
    // INFOS
    let idade
    let idadeHumana
    // ENTRADAS
    idade = Number(prompt("Digite a idade do cachorro"))
    // PROCESSAENTO
    idadeHumana = idade * 7
    // SAIDAS
    if (idadeHumana >= 65) {
        resposta.innerHTML = "pode se aposentar"
        
    } else {
        resposta.innerHTML = "Não pode se aposentar"
    }

    
}
function idadeVoto(){
    // INFOS
    let idade
    // ENTRADAS
    idade = Number(prompt("Digite sua idade: "))
    // PROCESSAMENTO
    // SAIDAS
    if (idade < 16) {
        resposta.innerHTML = "Não pode votar"
    } else {
        resposta.innerHTML = "Pode votar"
        
    }
}
function calculadoraIMC(){
    // INFOS
    let peso
    let altura
    let imc
    // ENTRADAS
    peso = Number(prompt("Digite seu peso:"))
    altura = Number(prompt("Digite sua altura:"))
    // PROCESSAMENTO
    imc = peso / (altura * altura)
    // SAIDAS
    if (imc > 25) {
        resposta.innerHTML = "imc ALTO"
    } else {
        resposta.innerHTML = "imc Normal"
    }
}
function calcularTemperatura(){
    // INFOS
    let temperaturaC
    let temperaturaF
    // ENTRADAS
    temperaturaC = Number(prompt("Digite a temperatura: "))
    // PROCESSAMENTO
    temperaturaF = (temperaturaC * 9/5) + 32
    // SAIDAS
    if (temperaturaF > 68) {
        resposta.innerHTML = "Alerta de calor"
    } else {
        resposta.innerHTML = "Temperatura normal"
    }
}
