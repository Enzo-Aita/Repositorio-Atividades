programa {
  funcao inicio() {

    inteiro PONTOS_VITORIA = 3
    inteiro PONTOS_EMPATE = 1
    
 
    inteiro numerosVitorias, numerosEmpates, totalJogos
    inteiro totalPontos, pontosPossiveis
    real aproveitamento
    

    escreva("Total de jogos disputados: ")
    leia(totalJogos)
    
    escreva("Total de vitórias: ")
    leia(numerosVitorias)
    
    escreva("Total de empates: ")
    leia(numerosEmpates)


    totalPontos = (numerosVitorias * PONTOS_VITORIA) + (numerosEmpates * PONTOS_EMPATE)
    pontosPossiveis = totalJogos * PONTOS_VITORIA
    

    se (pontosPossiveis > 0) {
      aproveitamento = (totalPontos * 100.0) / pontosPossiveis
    } senao {
      aproveitamento = 0.0
    }


    escreva("\n--- RELATÓRIO DO PEBA ---")
    escreva("\nPontos Conquistados: ", totalPontos)
    escreva("\nAproveitamento: ", aproveitamento, "%")


    se (aproveitamento >= 70) {
      escreva("\n\nSTATUS: Este time é um forte CANDIDATO AO TÍTULO!")
    } senao {
      escreva("\n\nSTATUS: O time não atingiu o aproveitamento de campeão (70%).")
    }
    
    escreva("\n--------------------------\n")
  }
}