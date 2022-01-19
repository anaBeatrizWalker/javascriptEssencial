Array.prototype.myMap = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        //dentro de cada interação, chama a callback passando o elemento atual, o índice e o array original
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 10.90}',
    '{"nome": "Kit de Lápis", "preco": 32.50}',
    '{"nome": "Caneta", "preco": 5.60}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco
const resultado = carrinho.myMap(paraObjeto).myMap(apenasPrecos)
console.log(resultado)