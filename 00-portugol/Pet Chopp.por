programa {
  funcao inicio() {
  
  real gramas
  real preco


  escreva("digite o peso da ração em gramas: ")
  leia(gramas)

  preco = (gramas / 1000) * 10
  escreva("preço a pagar em gramas R$: " + preco) 

  }
}
