programa {
  funcao inicio() {
    real clt, pj, estagiario
    real totalDeDevs, minimoClt

    escreva("Número de CLT: ")
    leia(clt)

    escreva("Número de PJ: ")
    leia(pj)

    escreva("Número de estagiário: ")
    leia(estagiario)


    totalDeDevs = clt + pj + estagiario
    minimoClt = totalDeDevs / 2

    escreva("\n--- RELATÓRIO DE COMPOSIÇÃO DE TIME ---")
    escreva("\nNúmero total de devs: " + totalDeDevs)
    escreva("\nQuantidade de CLT: " + clt)
    escreva("\nMínimo de CLT exigido (50%): " + minimoClt)
    escreva("\n----------------------------------------\n")


    se (clt >= minimoClt) {
      escreva("RESULTADO: A empresa está cumprindo a regra! O quadro de CLT é suficiente.")
    } senao {
      real faltante = minimoClt - clt
      escreva("ALERTA DE COMPLIANCE: A regra dos 50% CLT foi violada!")
      escreva("\nPara regularizar, você precisa contratar ou converter pelo menos " + faltante + " desenvolvedor(es) para CLT.")
    }
    
    escreva("\n")
  }
}