programa {
  funcao inicio() {
    real vitoria = 3
    real empate = 1
    inteiro numerosVitorias
    inteiro numerosEmpates
    inteiro totalPontos
    
   
     escreva("Total de vitorias: ")
    leia(numerosVitorias)
    escreva("Total de empates: ")
    leia(numerosEmpates)

    totalPontos = (numerosVitorias * vitoria) + (numerosEmpates * empate)
    escreva("Total de pontos: " + totalPontos)

  

    
  }
}
