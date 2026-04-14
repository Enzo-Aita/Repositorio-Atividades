programa {
  funcao inicio() {
     real temperatura
     escreva("Qual temperatura de hoje?: ")
     leia(temperatura)

     se(temperatura <= 20){
      escreva("sugiro que use casaco pesado")
     }senao se( temperatura <= 25){
      escreva("sugiro que use camisa e short, mas leve um casaco")
     } senao
      escreva("sugiro que use short e camisa")

     }
  }
}
