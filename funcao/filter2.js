Array.prototype.myFilter = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    { nome: "Notabook", preco: 3499, fragil: true },
    { nome: "iPad Pro", preco: 6999, fragil: true },
    { nome: "MousePad", preco: 150, fragil: false },
    { nome: "Headset", preco: 469.99, fragil: true },
    { nome: "Cabo HDMI", preco: 19.99, fragil: false },
]
caro = produto => produto.preco >= 450
fragil = produto => produto.fragil
console.log(produtos.myFilter(caro).myFilter(fragil))