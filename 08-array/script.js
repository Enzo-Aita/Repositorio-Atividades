let idades = [18, 20, 12, 35, 14, 15]
let precos = []
let produtos = [
    "Smartphone 5G", "Notebook Ultra", "Fone de Ouvido Bluetooth", "Smartwatch Fitness", "Teclado Mecânico",
    "Mouse Gamer", "Monitor 4K", "Carregador Portátil", "Caixa de Som Sem Fio", "Roteador Wi-Fi 6",
    "Cadeira Ergonômica", "Mesa Digitalizadora", "Microfone Condensador", "Webcam Full HD", "HD Externo 1TB",
    "SSD NVMe 500GB", "Placa de Vídeo", "Memória RAM 16GB", "Gabinete Gamer", "Fonte Alimentação 650W",
    "Cafeteira Elétrica", "Liquidificador Potente", "Fritadeira Sem Óleo", "Aspirador de Pó Robô", "Batedeira Planetária",
    "Micro-ondas Inox", "Geladeira Frost Free", "Fogão 4 Bocas", "Ar Condicionado Inverter", "Ventilador de Coluna",
    "Mochila Antifurto", "Tênis de Corrida", "Camiseta Algodão", "Calça Jeans Slim", "Jaqueta Corta-Vento",
    "Relógio de Pulso", "Óculos de Sol", "Carteira de Couro", "Perfume Importado", "Kit de Ferramentas",
    "Lâmpada Inteligente", "Fechadura Digital", "Protetor Solar FPS 50", "Garrafa Térmica", "Livro Best-Seller",
    "Jogo de Panelas", "Almofada Ortopédica", "Tapete de Yoga", "Bicicleta Aro 29", "Skate Complete"
]

function array00() {

    //  let i  = 0
    // console.log(idades[i]);

    //  console.log(idades.length)


    // for(let i = 0; i < 6; i++){

    // console.log("Idade = " + idades[i]);

    // }    

    for (let i = 0; i < idades.length; i++) {

        console.log(idades[i]);
    }
}


function addPrecos() {
    let n = Math.ceil(Math.random() * 100)
    precos.push(n)
    // console.log(precos)


    document.getElementById('lista-precos').innerHTML = ''
    for (let i = 0; i < precos.length; i++) {
        console.log(precos[i])
        document.getElementById('lista-precos').innerHTML += precos[i] + ' - '


    }

}

function mostrarProdutos() {
    document.getElementById('lista-precos').innerHTML = ''

    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i])
        document.getElementById('lista-precos').innerHTML += '<p classe="produtos">' + produtos[i] + '<p>'

    }


}


function sortearProdutos() {
    let produtos = [
        "Smartphone 5G", "Notebook Ultra", "Fone de Ouvido Bluetooth", "Smartwatch Fitness", "Teclado Mecânico",
        "Mouse Gamer", "Monitor 4K", "Carregador Portátil", "Caixa de Som Sem Fio", "Roteador Wi-Fi 6",
        "Cadeira Ergonômica", "Mesa Digitalizadora", "Microfone Condensador", "Webcam Full HD", "HD Externo 1TB",
        "SSD NVMe 500GB", "Placa de Vídeo", "Memória RAM 16GB", "Gabinete Gamer", "Fonte Alimentação 650W",
        "Cafeteira Elétrica", "Liquidificador Potente", "Fritadeira Sem Óleo", "Aspirador de Pó Robô", "Batedeira Planetária",
        "Micro-ondas Inox", "Geladeira Frost Free", "Fogão 4 Bocas", "Ar Condicionado Inverter", "Ventilador de Coluna",
        "Mochila Antifurto", "Tênis de Corrida", "Camiseta Algodão", "Calça Jeans Slim", "Jaqueta Corta-Vento",
        "Relógio de Pulso", "Óculos de Sol", "Carteira de Couro", "Perfume Importado", "Kit de Ferramentas",
        "Lâmpada Inteligente", "Fechadura Digital", "Protetor Solar FPS 50", "Garrafa Térmica", "Livro Best-Seller",
        "Jogo de Panelas", "Almofada Ortopédica", "Tapete de Yoga", "Bicicleta Aro 29", "Skate Complete"
    ]
    // produtos = Math.ceil(Math.random() * produtos.length)
    console.log(produtos[Math.ceil(Math.random() * produtos.length)])
}

