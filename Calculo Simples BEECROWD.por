programa {
  funcao inicio() {
    real valortotal
    real quantidade1
    real quantidade2
    real valor1
    real valor2
    inteiro numeropeca1
    inteiro numeropeca2

    escreva("Número da Peça 1: ")
    leia(numeropeca1)
    escreva("Número da peça 2: ")
    leia(numeropeca2)
    escreva("Quantidade de peças 1: ")
    leia(quantidade1)
    escreva("Quantidade de peças 2: ")
    leia(quantidade2)
    escreva("Valor da peça 1: ")
    leia(valor1)
    escreva("Valor da peça 2: ")
    leia(valor2)

    valortotal = (quantidade1 * valor1) + (quantidade2 * valor2)
    escreva("Valor total a pagar: " + valortotal)


    
  }
}
