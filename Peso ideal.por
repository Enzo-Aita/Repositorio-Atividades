programa {
  funcao inicio() {
    real altura, pesoIdeal
    inteiro genero

    // Entrada de dados
    escreva("Digite a altura da pessoa (ex: 1.75): ")
    leia(altura)

    escreva("Informe o gênero (1 para Feminino, 2 para Masculino): ")
    leia(genero)

    // Lógica de cálculo baseada no gênero
    se (genero == 1) {

      pesoIdeal = (62.1 * altura) - 44.7
      escreva("O peso ideal para uma mulher com ", altura, "m é: ", pesoIdeal, " kg.")
    } 
    senao se (genero == 2) {
      pesoIdeal = (72.7 * altura) - 58.0
      escreva("O peso ideal para um homem com ", altura, "m é: ", pesoIdeal, " kg.")
    } 
    senao {
      // Caso o usuário digite algo diferente de 1 ou 2
      escreva("Gênero inválido! Por favor, use 1 ou 2.")
    }

  }
}