programa {
  funcao inicio() {
    inteiro id
    inteiro horasTrabalhadas
    real valorHora
    real salario

   escreva("ID usuário: ")
   leia(id)
   escreva("Horas Trabalhadas: ")
   leia(horasTrabalhadas)
   escreva("Valor Hora:")
   leia(valorHora)

   salario = horasTrabalhadas * valorHora
   escreva("NUMBER = " + id)
   escreva("\nSALARY = " + "R$ " + salario)

   


  }
}
