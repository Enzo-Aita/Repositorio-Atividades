programa {
  funcao inicio() {

   inteiro caracteres
   real custotoken = 0.151
   inteiro tokens
   real custototal


   escreva("Digite o número de caracteres do prompt: ")
   leia(caracteres)

   tokens = 5 + caracteres
   custototal =  tokens * custotoken


   escreva("Total de tokens utilizados: " + tokens)
   escreva("\nCusto total: R$ " + custototal)
    
  }
}
