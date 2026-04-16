programa {
  funcao inicio() {
    cadeia vendedor
    real salario
    real vendas
    real total

    escreva("Nome do Vendedor: ")
    leia(vendedor)
    escreva("Salário do Vendedor: ")
    leia(salario)
    escreva("Vendas realizadas: ")
    leia(vendas)
    
    total = salario + (vendas * 0.15)
    escreva("Valor a receber: " + total)


  }
}
