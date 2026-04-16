programa {
  funcao inicio() {
    real nota1 
    real nota2
    real nota3
    real media

    escreva("Nota 1: " ) 
    leia(nota1)
    escreva("Nota 2: ")
    leia(nota2)
    escreva("Nota 3: ")
    leia(nota3)

    media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10 
    escreva("resultado Final: " + media)
    
  }
}
