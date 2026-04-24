//infos
let preco
let quantidade
let valorTotal


// leitura
quantidade = Number(prompt("Quantidade: "))
preco = Number(prompt("Preço: R$"))
// processo
valorTotal = quantidade * preco


// saidas
console.log("Valor a receber: R$" + valorTotal.toFixed(2))