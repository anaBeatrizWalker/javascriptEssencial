const carrinho = [
    '{"nome": "Borracha", "preco": "3.45"}',
    '{"nome": "Caderno", "preco": "10.90"}',
    '{"nome": "Kit de Lápis", "preco": "32,50"}',
    '{"nome": "Caneta", "preco": "5.60"}'
]
//Meu
parse = carrinho.map(e => JSON.parse(e))
precos = parse.map(e => {return e.preco})
console.log(parse)
console.log(precos)

//Do professor
const paraObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPrecos)
console.log(resultado)