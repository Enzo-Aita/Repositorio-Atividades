programa {
  funcao inicio() {
    real luz, agua, doacoes
    real totalCustoMensal
    real totalFaltante
    

    escreva("Gasto com Luz: ")
    leia(luz)
    enquanto (luz < 0) {
      escreva("Valor inválido. Digite o gasto com Luz: ")
      leia(luz)
    }
    
    escreva("Gasto com Água: ")
    leia(agua)
    enquanto (agua < 0) {
      escreva("Valor inválido. Digite o gasto com Água: ")
      leia(agua)
    }

    escreva("Doações dos Fiéis: ")
    leia(doacoes)
    enquanto (doacoes < 0) {
      escreva("Valor inválido. Digite o valor das Doações: ")
      leia(doacoes)
    }


    totalCustoMensal = luz + agua  
    totalFaltante = totalCustoMensal - doacoes

    escreva("\n--- Resumo Financeiro ---")
    escreva("\nCusto mensal da igreja: R$ " + totalCustoMensal)
    escreva("\nTotal arrecadado: R$ " + doacoes)

    se (totalFaltante > 0) {
      escreva("\n\n[ALERTA] A meta ainda não foi atingida!")
      escreva("\nValor restante para cobrir os custos: R$ " + totalFaltante)
      escreva("\nAVISO AO PADRE: Por favor, lembre os fiéis durante a celebração de que eles podem contribuir.")
    } senao {
      escreva("\n\nParabéns! Todas as contas foram cobertas pelas doações.")
      se (totalFaltante < 0) {

        escreva("\nSaldo excedente para o caixa da igreja: R$ " + (totalFaltante * -1))
      }
    }
    
    escreva("\n")
  }
}