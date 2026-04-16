programa {
  funcao inicio() {
    real bruto, premiacao, gasto, comissao, meta, liquido, diferenca

    escreva("Digite o faturamento bruto: ")
    leia(bruto)
    escreva("Digite o valor de premiações/presentes: ")
    leia(premiacao)
    escreva("Digite o total de gastos operacionais: ")
    leia(gasto)
    escreva("Digite o valor de comissões: ")
    leia(comissao)
    
    escreva("\nQual a meta de lucro líquido para este período? ")
    leia(meta)


    liquido = bruto - premiacao - gasto - comissao

    escreva("\n---------------------------------------")
    escreva("\nFaturamento Líquido: R$ ", liquido)

    se (liquido >= meta) {
      escreva("\nPARABÉNS! A meta de R$ ", meta, " foi atingida.")
      se (liquido > meta) {
        escreva("\nVocê superou a meta em: R$ ", (liquido - meta))
      }
    } 
    senao {
      diferenca = meta - liquido
      escreva("\nA meta não foi atingida.")
      escreva("\nFaltou R$ ", diferenca, " para alcançar o objetivo.")
    }
    escreva("\n---------------------------------------")
  }
}