// infos
let valorBruto
let premiacoes
let presentes
let comissoes
let lucroFinal

// leitura
valorBruto = Number(prompt("Valor bruto: R$ "))
premiacoes = Number(prompt("Valor em premiações: R$ "))
presentes = Number(prompt("Valor dos presentes: R$ "))
comissoes = Number(prompt("Valor das comissões: R$ "))
// processo
lucroFinal = valorBruto - premiacoes - presentes - comissoes
// saidas
console.log("Lucro final da Dona Bete: R$" + lucroFinal)