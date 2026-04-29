// infos
let frete
let peso
let distancia
let volume
// leitura
peso = Number(prompt("Peso carga: Kg "))
distancia = Number(prompt("Distância percorrida: Km"))
volume = Number(prompt("Volume da carga em m3: "))
// processo
frete = 15 + (2 * peso) + (0.05 * distancia ) + (10 * volume)
// saidas
console.log("Frete total: R$ " + frete   )
