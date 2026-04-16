programa {
  funcao inicio() {
    
    inteiro horas
    real precoHora = 350.0
    real custosFixos = 500.0
    real valorProjetoAtual, lucroProjetoAtual
    
    real rendaOutrosProjetos, rendaTotalMes, percentualFreela

    escreva("Horas estimadas para este projeto: ")
    leia(horas)

    valorProjetoAtual = (horas * precoHora) + custosFixos
    lucroProjetoAtual = valorProjetoAtual - custosFixos

    escreva("Quanto você já ganhou com outros bicos este mês? R$ ")
    leia(rendaOutrosProjetos)

    rendaTotalMes = lucroProjetoAtual + rendaOutrosProjetos

    se (rendaTotalMes > 0) {
      percentualFreela = (rendaOutrosProjetos / rendaTotalMes) * 100
    } senao {
      percentualFreela = 0.0
    }

    escreva("\n========================================")
    escreva("\nValor a cobrar do cliente: R$ ", valorProjetoAtual)
    escreva("\nLucro líquido deste projeto: R$ ", lucroProjetoAtual)
    
    escreva("\n\nRESUMO MENSAL DO JUNIN:")
    escreva("\nRenda total acumulada no mês: R$ ", rendaTotalMes)
    escreva("\nRepresentatividade dos outros bicos: ", percentualFreela, "%")
    escreva("\n========================================\n")


    se (percentualFreela > 50) {
      escreva("Caramba! Mais da metade da sua renda vem de projetos externos. Voa, Junin!")
    } senao {
      escreva("Este projeto atual é sua principal fonte de renda no momento.")
    }
    
    escreva("\n")
  }
}