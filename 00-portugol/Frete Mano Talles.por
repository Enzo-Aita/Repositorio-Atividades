programa {
  funcao inicio() {
    real peso = 20, volume = 1
    inteiro distancia = 650
    real frete

    frete = 15+(2*peso)+(0.05*distancia)+(10*volume)
    escreva("\nValor do frete(1): R$" + frete)
    // escreva("Valor do frete: R$" + 15+(2*peso)+(0.05*distancia)+(10*volume))


    // caso 2
        peso = 60
        volume = 0.5
        distancia = 100
    frete = 15+(2*peso)+(0.05*distancia)+(10*volume)
    escreva("Valor do frete(3): R$" + frete)
  }
}