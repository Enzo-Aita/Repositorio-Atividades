programa {
  funcao inicio() {
    real pontuacao
    
    escreva("Pontuação: ")
    leia(pontuacao)

    se(pontuacao <= 10){
      escreva("Deu Ruim")
    } senao se(pontuacao > 10 e pontuacao <=100){
      escreva("Ta melhorando, continue!")
    } senao se(pontuacao > 100 e pontuacao <= 200){
      escreva("Supimpa!")
    }senao se(pontuacao > 200)
    escreva("MITOUUU")

    
  }
}
