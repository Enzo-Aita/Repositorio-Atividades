programa {
  funcao inicio() {
// Total de Relatórios
    inteiro qntpf = 40
    inteiro qntpj = 33
    real qntRelatorio
    qntRelatorio = qntpf + qntpj
    escreva("Quantidade Total de Relatótios: " + qntRelatorio + " Relatórios")


// Tempo total Trabalhado
real pftempo = 12
real pjtempo = 42
real tempoTotal
tempoTotal = pftempo + pjtempo
escreva("\nTempo total trabalhado: " + tempoTotal + " Horas")


// Valor total Recebido
    real valorpf = 2350
    real valorpj = 8900
    real valorTotal
    valorTotal = valorpf + valorpj
    escreva(" \nvalor total recebido: " + valorTotal + " Reais")

// Media do Valor recebido PF e PJ
   real mediapf
   real mediapj
   mediapf = valorpf / qntpf 
   mediapj = valorpj / qntpj 
   escreva("\nMedia pf: " + mediapf)
   escreva("\nMedia pj: " + mediapj)
 
// Media tempo gasto pro Relatótio
  real tpgastppf
  real tpgastppj
  tpgastppf = pftempo / qntpf
  tpgastppj = pjtempo / qntpj
  escreva("\nTempo por relatório: " + tpgastppf)
    escreva("\nTempo por relatório: " + tpgastppj)
  }
}
