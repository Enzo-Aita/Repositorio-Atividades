programa {
  funcao inicio() {
    real moradia
    real agua
    real luz
    real internet
    real gasolina
    real streamings
    real telefone
    real lazer
    real totalGasto
    real salarioJuca
    real valorFinal

    escreva("Salário do mano Juca: ")
    leia(salarioJuca)

    escreva("Valor gasto em moradia: ")
    leia(moradia)
    escreva("Valor gasto em agua: ")
    leia(agua)
    escreva("Valor gasto em luz: ")
    leia(luz)
    escreva("Valor gasto em internet: ")
    leia(internet)
    escreva("Valor gasto em gasolina: ")
    leia(gasolina)
    escreva("Valor gasto em streamings : ")
    leia(streamings)
    escreva("Valor gasto em telefone: ")
    leia(telefone)
    escreva("Valor gasto em lazer: ")
    leia(lazer)

    totalGasto = moradia + agua + luz + telefone +
    internet + gasolina + streamings + lazer
    escreva("Total gasto: " + totalGasto)

    valorFinal = salarioJuca - totalGasto
    escreva("\nValor final: " + valorFinal)

    se (totalGasto <= salarioJuca) {
      escreva("\nJuca esta no VERDE")

    } senao {
      escreva("\nJuca esta no VERMELHO")

    }





    
  }
}
