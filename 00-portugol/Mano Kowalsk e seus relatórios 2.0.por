programa {
  funcao inicio() {
    // --- Dados PF ---
    inteiro qntpf = 40
    real pftempo = 12.0
    real valorpf = 2350.0

    // --- Dados PJ ---
    inteiro qntpj = 33
    real pjtempo = 42.0
    real valorpj = 8900.0

    // --- Cálculos Totais ---
    inteiro qntTotalRelatorio = qntpf + qntpj
    real tempoTotal = pftempo + pjtempo
    real valorTotal = valorpf + valorpj

    // --- Médias ---
    real mediapf = valorpf / qntpf 
    real mediapj = valorpj / qntpj 
    
    real tpgastppf = pftempo / qntpf
    real tpgastppj = pjtempo / qntpj

    // --- Exibição dos Resultados ---
    escreva("=== RELATÓRIO GERAL ===")
    escreva("\nQuantidade Total: ", qntTotalRelatorio, " relatórios")
    escreva("\nTempo Total: ", tempoTotal, " horas")
    escreva("\nValor Total Recebido: R$ ", valorTotal)
    escreva("\n-----------------------")
    escreva("\nValor médio PF: R$ ", mediapf)
    escreva("\nValor médio PJ: R$ ", mediapj)
    escreva("\nTempo médio por relatório PF: ", tpgastppf, "h")
    escreva("\nTempo médio por relatório PJ: ", tpgastppj, "h")
    escreva("\n-----------------------\n")

    // --- Refatoração: Análise de Investimento (Kowalski) ---
    
    logico pjPagaMelhor = mediapj > mediapf
    logico pfPagaMelhor = mediapf > mediapj
    
    escreva("ANÁLISE DE ESTRATÉGIA:\n")

    se (pjPagaMelhor e qntpj > qntpf) {
      escreva("Kowalski está no caminho certo! O relatório PJ paga mais e é o mais produzido.")
    } 
    senao se (pfPagaMelhor e qntpf > qntpj) {
      escreva("Kowalski está no caminho certo! O relatório PF paga mais e é o mais produzido.")
    } 
    senao {
      escreva("Aviso: Kowalski NÃO está priorizando o relatório de maior retorno financeiro.")
      
      se (pjPagaMelhor) {
        escreva("\nSugestão: Aumentar a produção de relatórios PJ (Melhor média: R$", mediapj, ")")
      } senao {
        escreva("\nSugestão: Aumentar a produção de relatórios PF (Melhor média: R$", mediapf, ")")
      }
    }
    escreva("\n")
  }
}