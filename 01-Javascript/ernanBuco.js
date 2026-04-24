// infos
let custosMensais
let doacoes
let valorFinal

// leitura
custosMensais = Number(prompt("Custos Mensais R$: "))
doacoes = Number(prompt("Doeações Recebidas R$: "))

// processos
valorFinal = custosMensais - doacoes

// saida
console.log("Falta Pagar R$: " + valorFinal)