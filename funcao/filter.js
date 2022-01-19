const produtos = [
    { nome: "Notabook", preco: 3499, fragil: true },
    { nome: "iPad Pro", preco: 6999, fragil: true },
    { nome: "MousePad", preco: 150, fragil: false },
    { nome: "Headset", preco: 469.99, fragil: true },
    { nome: "Cabo HDMI", preco: 19.99, fragil: false },
]
//Meu
ehFragil = f => { if(f.fragil === true){ return f.fragil }}
ehCaro = c => { if(c.preco > 450){ return c.preco }}
resultado = produtos.filter(ehFragil).filter(ehCaro)
console.log(resultado)

//Do professor
caro = produto => produto.preco >= 450
fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))

//console.log(produtos.filter(p => {
    //return false //[]
    //return true //array inteiro
//}))