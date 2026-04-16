programa {
  funcao inicio() {
    inteiro numeroPalestra

    // Menu de opções
    escreva("1 - Animações com Scratch\n")
    escreva("2 - Scratch para gamers\n")
    escreva("3 - JavaScript para leigos\n")
    escreva("4 - Tópicos avançados de JavaScript\n")
    escreva("5 - Vida e carreira\n")
    
    escreva("\nEscolha o número da palestra: ")
    leia(numeroPalestra)

    // Lógica com SE e SENAO
    se (numeroPalestra == 1) {
      escreva("Local: Laboratório 305 | Horário: 19h")
    } 
    senao se (numeroPalestra == 2) {
      escreva("Local: Laboratório 512 | Horário: 20h")
    } 
    senao se (numeroPalestra == 3) {
      escreva("Local: Laboratório 101 | Horário: 19h")
    } 
    senao se (numeroPalestra == 4) {
      escreva("Local: Laboratório 305 | Horário: 20h")
    } 
    senao se (numeroPalestra == 5) {
      escreva("Local: Auditório | Horário: 21h")
    } 
    senao {
      escreva("Opção inválida! Escolha de 1 a 5.")
    }
    
    escreva("\n")
  }
}