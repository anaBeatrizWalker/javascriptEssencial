//Versão ES6

//let e const
{
    var a = 2
    let b = 3
    console.log(b) //3
}
console.log(a) //2
//console.log(b) //error

//Template String
const produto = 'iPad'
console.log(`Um ${produto} é muito caro`)

//Destructuring
const [l, e, ...tras] = 'coder'
console.log(l,e,tras) //c o [ 'd', 'e', 'r' ]

const [x, ,y] = [1,2,3]
console.log(x,y) //1 3

const {idade: i, nome} = {nome: 'Ana', idade: 20}
console.log(i, nome) //20 Ana