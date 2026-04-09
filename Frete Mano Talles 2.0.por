programa {
  funcao inicio() {
    real peso, volume, frete
    inteiro distancia

    escreva("Digite o peso da carga: ")
    leia(peso)
    enquanto (peso <= 0) {
      escreva("Valor inválido! O peso deve ser maior que zero. Digite novamente: ")
      leia(peso)
    }

    escreva("Digite o volume da carga: ")
    leia(volume)
    enquanto (volume <= 0) {
      escreva("Valor inválido! O volume deve ser maior que zero. Digite novamente: ")
      leia(volume)
    }

    escreva("Digite a distância da entrega: ")
    leia(distancia)
    enquanto (distancia <= 0) {
      escreva("Valor inválido! A distância deve ser maior que zero. Digite novamente: ")
      leia(distancia)
    }


    frete = 15.0 + (2.0 * peso) + (0.05 * distancia) + (10.0 * volume)

    escreva("\n--- Resumo do Frete ---")
    escreva("\nPeso: ", peso)
    escreva("\nVolume: ", volume)
    escreva("\nDistância: ", distancia)
    escreva("\nValor final do frete: R$ ", frete, "\n")
  }
}