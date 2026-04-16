programa {
  funcao inicio() { 
    real valorTotal, valorDiaria, desconto10
    real desconto15, multa = 150 , valorBruto
    inteiro dias

   escreva("Quantos dias: ")
   leia(dias)

   se(dias <= 5) {
    valorDiaria = 100
   } senao se(dias >= 6 e dias <= 10 ){
    valorDiaria = 90
   } senao se ( dias >= 11){
    valorDiaria = 80
   }
    valorBruto = dias * valorDiaria
    desconto10 = valorBruto * 0.10
    desconto15 = valorBruto * 0.15
    valorTotal = valorBruto - desconto10 - desconto15 + multa

    escreva("\n=====================\n")
    escreva("Valor Bruto: R$" + valorBruto)
    escreva("\nDesconto 1: R$" + desconto10)
    escreva("\nDesconto 2: R$" + desconto15)
    escreva("\nMulta: R$" + multa)
    escreva("\n======================\n")
    escreva("Total a pagar: R$" + valorTotal)
    






  
    
  }
}
