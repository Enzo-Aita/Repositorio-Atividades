programa {
  funcao inicio() {
    real lucroPorCaminhao, lucroTotal
    inteiro caminhoes
    lucroPorCaminhao = (90*50) - 450
    escreva(lucroPorCaminhao)

    escreva("Quantos Caminhões:")
    leia(caminhoes)
    lucroTotal = lucroPorCaminhao * caminhoes
    escreva("Lucro da temporada: " + lucroTotal) 
    
  }
}
