// infos
let n 
let chance
// leitura
chance = Number(prompt(" chance de para humanos: "))
n = Number(prompt("Numero de olhadinhas no celuluar: "))
// processo
chance = (0.1 / (1 + 500 * n)) * 100
// saidas
alert("Chance de aprovação basiada nos olhadinha no celular:  " + chance)

