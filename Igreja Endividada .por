programa {
  funcao inicio() {
    real luz
    real agua
    real doacoes
    real totalCustoMensal
    real totalFaltante
    
    escreva("Gasto com Luz:")
    leia(luz)
    
    escreva("Gasto com agua:")
    leia(agua)

    escreva("Doações dos Fieis: ")
    leia(doacoes)


    totalCustoMensal = luz + agua  
    escreva("Custo mensal da igreja: " + totalCustoMensal)

    totalFaltante = totalCustoMensal - doacoes
    escreva("\nValor a ser pago: " + totalFaltante)
    

  }
}
