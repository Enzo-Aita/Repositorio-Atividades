programa {
  funcao inicio() {
    real qntInicialLaranja, qntFinalLaranja, totalDeLaranjas


    escreva("Quantidade inicial de laranjas: ")
    leia(qntInicialLaranja)
    enquanto (qntInicialLaranja < 0) {
      escreva("Valor inválido! A quantidade inicial não pode ser negativa. Digite novamente: ")
      leia(qntInicialLaranja)
    }

    escreva("Quantidade final de laranjas: ")
    leia(qntFinalLaranja)
    enquanto (qntFinalLaranja < 0 ou qntFinalLaranja > qntInicialLaranja) {
      se (qntFinalLaranja < 0) {
        escreva("Valor inválido! A quantidade final não pode ser negativa: ")
      } senao {
        escreva("Erro! A quantidade final não pode ser maior que a inicial: ")
      }
      leia(qntFinalLaranja)
    }


    totalDeLaranjas = qntInicialLaranja - qntFinalLaranja 
    escreva("\nTotal de laranjas vendidas foi de: " + totalDeLaranjas)

    se (qntFinalLaranja == 0) {
      escreva("\nAVISO: O estoque terminou zerado! O estoque deve ser maior no próximo dia.")
    }
    
    escreva("\n")
  }
}