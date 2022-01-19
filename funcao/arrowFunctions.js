let dobro = (a) => {
    return 2 * a
}
// ou ainda
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = () => 'Olá'
ola = _ => 'Olá' //único parâmetro (pode ser ignorado)
console.log(ola())

//USANDO THIS
function Pessoa(){
    this.idade = 20

    setInterval(()=>{
        this.idade++
        console.log(this.idade) //21, 22...
    }, 1000)
}
//new Pessoa

let comparaComThis = function(param){
    console.log(this === param)
}
//comparaComThis(global) //true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//comparaComThis(global) //false
//comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param) 
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true
comparaComThisArrow(this) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false, this é mais forte que bind
comparaComThisArrow(module.exports) //true