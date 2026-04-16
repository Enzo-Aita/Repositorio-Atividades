programa {
  funcao inicio() {
    real tempFahrenheit
    real tempCelsius 

    escreva("Temperatura em Celsius: ")
    leia(tempCelsius)

    tempFahrenheit = (tempCelsius * (9/5)) + 32
    escreva("Temperatura em Fahrenheit: " + tempFahrenheit)
  }
}
