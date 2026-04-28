// infos
let gastos
let faturamentoIngressos
let faturamentoItens
let faturamentoTotal
let lucroReais
let lucroPorcentagem

// leitura
gastos = Number(prompt("Valor Investido: R$ "))
faturamentoIngressos = Number(prompt("Faturamento com Ingressos: R$"))
faturamentoItens = Number(prompt("Faturamento com Itens: R$"))
// processos
faturamentoTotal = faturamentoIngressos + faturamentoItens
lucroReais = gastos - faturamentoTotal
lucroPorcentagem =  gastos / lucroReais
// saida
console.log("Lucro final : "  + lucroReais)
console.log("Lucro em porcentagem %: " + lucroPorcentagem)