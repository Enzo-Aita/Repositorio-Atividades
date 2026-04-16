programa {
  funcao inicio() {
    real tamanhoPizza

    escreva("Qual tamanho de Pizza\n (Opções: 1 para Pequeno, 2 para Médio, 3 para Grande): ")
    leia(tamanhoPizza)
    se(tamanhoPizza == 1){
      escreva("Preço pizza pequena: R$ 25,00")
    } senao se (tamanhoPizza == 2){
      escreva("Preço pizza media: R$ 45,00")
    } senao se(tamanhoPizza == 3){
      escreva("Preço pizza grande: R$ 70,00")
    } senao 
      escreva("Opção invalidada. Escolha um número entre 1 e 3") 

    }
  }
}
