// infos
let salario
let dias
let salarioDiario

// entradas
salario = Number(prompt("Salário: "))
dias = Number(prompt("Dias Trabalhados: "))

// processo
salarioDiario = salario / dias
// saidas
console.log("Salário diário: R$ " + salarioDiario.toFixed(2))
