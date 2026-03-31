programa {
  funcao inicio() {
    real salario
    inteiro dias
    real salarioDiario

    escreva("digite seu salario: ")
    leia(salario)
    escreva("quantos dias trabalhou esse mes: ")
    leia(dias)
    salarioDiario = salario / dias
    escreva("\nPor dia você recebe R$ " + salarioDiario)

    
  }
}
