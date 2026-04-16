programa {
  funcao inicio() {
    real peso
    real altura
    real imc


    escreva("Digite sua peso: ")
    leia(peso)
    escreva("Digite seu altura: ")
    leia(altura)

    imc =  peso / (altura * altura)
    escreva("imc " + imc)

se (imc > 25) {
    escreva(" imc alto")
} senao se (imc >= 18) {
    escreva(" imc normal")
} senao se (imc < 18) {
    escreva(" imc baixo")
} 



    
  }
}
