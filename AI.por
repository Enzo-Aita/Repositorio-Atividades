programa {
  funcao inicio() {

   inteiro caracteres
   real custotoken
   inteiro tokens
   real custototal


   escreva("Digite o número de caracteres do prompt: ")
   leia(caracteres)

   escreva("Digite o custo de cada token (em R$): ")
   leia(custotoken)

   tokens = 5 + caracteres
   custototal =  tokens * custotoken


   escreva("Total de tokens utilizados: " + tokens)
   escreva("\nCusto total: R$ " + custototal)
    
  }
}
