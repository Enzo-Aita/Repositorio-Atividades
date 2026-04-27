// infos
let pesoBruto
let tara
let pesoCarga
// leitura
pesoBruto = Number(prompt("Peso Bruto da Carga: kg"))
tara = Number(prompt("Tara da Carga: "))
// processo
pesoCarga = pesoBruto - tara 
// saidas
console.log("Peso Final da Carga: Kg " + pesoCarga)