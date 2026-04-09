programa {
  funcao inicio() {
    real valoritem
    real saldo
    cadeia nomeusuario

    escreva("Nome do usuario: ")
    leia(nomeusuario)
    escreva("Valor do item:")
    leia(valoritem)
    escreva("Salário do usuario: ")
    leia(saldo)

    se (saldo >= valoritem){
      escreva("Compra APROVADO")
    } senao {
      escreva("Compra RECUSADA")
    }

    
  }
}
