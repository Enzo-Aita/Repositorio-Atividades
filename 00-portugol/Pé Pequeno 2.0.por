programa {
  funcao inicio() {
    real preco, valorTotal
    inteiro quantidade

    escreva("Digite o preço do par: R$ ")
    leia(preco)
    enquanto (preco <= 0) {
      escreva("Valor inválido! O preço deve ser maior que zero. Digite novamente: R$ ")
      leia(preco)
    }

    escreva("Digite a quantidade de pares: ")
    leia(quantidade)
    enquanto (quantidade <= 0) {
      escreva("Valor inválido! A quantidade deve ser maior que zero. Digite novamente: ")
      leia(quantidade)
    }

    se (quantidade > 100) {
      escreva("\nPedido de ", quantidade, " pares negado.")
      escreva("\nLimite máximo de 100 pares por loja excedido. Por favor, entre em contato diretamente com a fábrica.\n")
    } senao {

      valorTotal = preco * quantidade
      escreva("\nA loja vai receber R$" + valorTotal + "\n")
    }
  }
}