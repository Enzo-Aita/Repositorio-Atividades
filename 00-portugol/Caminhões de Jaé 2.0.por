programa {
  funcao inicio() {
    real lucroPorCaminhao, lucroTotal
    inteiro caminhoesAtual, caminhoesPassada

    // Cálculo do lucro fixo por caminhão (90 sacos * 50 reais - 450 de custos)
    lucroPorCaminhao = (90 * 50) - 450 


    escreva("Quantos caminhões de jarés foram vendidos na temporada PASSADA: ")
    leia(caminhoesPassada)

    escreva("Quantos caminhões de jarés foram vendidos na temporada ATUAL: ")
    leia(caminhoesAtual)


    lucroTotal = lucroPorCaminhao * caminhoesAtual


    escreva("\n========================================")
    escreva("\nLucro por caminhão: R$ ", lucroPorCaminhao)
    escreva("\nLucro total da temporada: R$ ", lucroTotal)
    escreva("\n----------------------------------------")
    

    escreva("\nANÁLISE DE DESEMPENHO:")

    se (caminhoesAtual > caminhoesPassada) {
      escreva("\nBoas notícias, Gael! As vendas AUMENTARAM em relação à temporada passada.")
    } 
    senao se (caminhoesAtual < caminhoesPassada) {
      escreva("\nAtenção, Gael: As vendas DIMINUÍRAM em relação à temporada passada.")
    } 
    senao {
      escreva("\nAs vendas se MANTIVERAM estáveis em comparação à temporada passada.")
    }
    
    escreva("\n========================================\n")
  }
}