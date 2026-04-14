programa {
  funcao inicio() {
    real valorReal
    real moedaEstrangeira
    real valorConvertido

    escreva("Valor em Reais pra ser convertido: ")
    leia(valorReal)
    escreva("Digite o número correspondende a moeda (opção: 1 EURO, 2 DOLAR ):")
    leia(moedaEstrangeira)

    se(moedaEstrangeira == 1){
      moedaEstrangeira = 5.88
      valorConvertido = valorReal * moedaEstrangeira
      escreva("Valor convertido: R$" + valorConvertido)

    } senao se (moedaEstrangeira == 2){
      moedaEstrangeira = 5.00
      valorConvertido = valorReal * moedaEstrangeira
      escreva("Valor convertido: R$" + valorConvertido)

    } senao
    escreva("Insira um valor válido")

  }
}
