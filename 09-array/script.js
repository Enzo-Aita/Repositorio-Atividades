

let produtos = ["Meia", "Pá de corte", "Suco de manga", "leite"]
let precos = [8, 15, 12, 6]


function verProdutos() {
    // console.log(produtos);
    for (let i = 0; i < produtos.length; i++) {
        let c = i + 1
        document.getElementById("lista-produtos").innerHTML += "<p>" + c + "º:" + produtos[i] + "</p>"
    }
}
function verProdutoscomPrecos() {
    document.getElementById("lista-produtos").innerHTML = " "
    for (let i = 0; i < produtos.length; i++) {
        let c = i + 1
        document.getElementById("lista-produtos").innerHTML += "<p>" + c + "º:" + produtos[i] +
            " R$ " + precos[i].toFixed(2).replace(".", ",") + "</p>"
    }
}

function aumentodePrecos() {

    for (let i = 0; i < precos.length; i++) {
        precos[i] = precos[i] * 4
    }
    verProdutoscomPrecos() // att lista na tela
}
function adicionarnovoProduto() {
    let produto
    let preco
    do {
        produto =(prompt("digite o nome do produto"))
        
    } while (produto == "");

    preco = Number(prompt("Digite o preço do produto"))
    
    produtos.push(produto)
    precos.push(preco)

    verProdutoscomPrecos()


}
function removerultimoProduto() {
     produtos.pop() 
     precos.pop()
    

    verProdutoscomPrecos() //att lista da tela


}