programa {
  funcao inicio() {
    inteiro quantidadeMacas
    real precoUnitario, valorTotal

    // Entrada de dados
    escreva("Quantas maçãs o Mano Juca vai comprar? ")
    leia(quantidadeMacas)

    se (quantidadeMacas < 12) {
      precoUnitario = 0.30
    } 
    senao {
      precoUnitario = 0.25
    }

    // Cálculo do total
    valorTotal = quantidadeMacas * precoUnitario

    // Exibição do resultado
    escreva("Quantidade: ", quantidadeMacas)
    escreva("\nPreço por unidade: R$ ", precoUnitario)
    escreva("\nTotal da compra: R$ ", valorTotal)
    
  }
}