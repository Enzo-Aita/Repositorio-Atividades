programa {
  funcao inicio() {
    real gastosSuprimentos, faturamentoIngressos, faturamentoItens
    real faturamentoTotal, lucroReais, lucroPercentual



    escreva("Total gasto em suprimentos e mercadorias: R$ ")
    leia(gastosSuprimentos)

    escreva("Faturamento com venda de ingressos: R$ ")
    leia(faturamentoIngressos)

    escreva("Faturamento com venda de itens (loja/bar): R$ ")
    leia(faturamentoItens)

    faturamentoTotal = faturamentoIngressos + faturamentoItens
    lucroReais = faturamentoTotal - gastosSuprimentos

    se (faturamentoTotal > 0) {
      lucroPercentual = (lucroReais / faturamentoTotal) * 100
    } senao {
      lucroPercentual = 0.0
    }

 
    escreva("\n========================================")
    escreva("\nFaturamento Bruto: R$ ", faturamentoTotal)
    escreva("\nCustos Operacionais: R$ ", gastosSuprimentos)
    escreva("\n----------------------------------------")
    escreva("\nLUCRO OBTIDO: R$ ", lucroReais)
    escreva("\nLUCRO PERCENTUAL: ", lucroPercentual, "%")
    escreva("\n========================================\n")

    escreva("ANÁLISE DE VENDAS PARA O CAPITÃO:")
    
    se (faturamentoIngressos > faturamentoItens) {
      escreva("\nCapitão, os INGRESSOS são sua maior fonte de ouro no momento!")
    } 
    senao se (faturamentoItens > faturamentoIngressos) {
      escreva("\nCapitão, a VENDA DE ITENS está rendendo mais que os ingressos!")
    } 
    senao se (faturamentoIngressos == 0 e faturamentoItens == 0) {
      escreva("\nO navio está fantasma! Não houve vendas hoje.")
    }
    senao {
      escreva("\nEquilíbrio total: Ingressos e Itens renderam valores idênticos.")
    }

    escreva("\n\nSITUAÇÃO DO NAVIO: ")
    se (lucroReais > 0) {
      escreva("Vento em popa! A expedição foi lucrativa.")
    } senao se (lucroReais < 0) {
      escreva("ALERTA: O navio está afundando em dívidas! Prejuízo detectado.")
    } senao {
      escreva("Estamos estagnados. O faturamento apenas cobriu os custos.")
    }
  }
}
