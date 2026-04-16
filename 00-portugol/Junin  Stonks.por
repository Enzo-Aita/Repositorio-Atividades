programa {
  funcao inicio() {
    
    inteiro horas
    real preco = 350
    real valorCobrado
    real lucro

    escreva("Horas estimadas: ")
    leia(horas)

    valorCobrado = (horas * preco) + 500
    escreva("Valor Cobrado por trabalho: R$ " + valorCobrado)
    lucro = valorCobrado - 500
    escreva("\nLucro total do Junin: R$ " + lucro)








  }
}
