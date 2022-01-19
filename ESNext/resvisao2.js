//ECMA2015

//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow Function e this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1() //true
lexico2() //true

//Parâmetro Default
function log(texto = 'Node'){
    console.log(texto)
}
log() //Node
log('Sou mais forte')

//Operador rest (juntar)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) //14

//Operador spread (espalhar)
const funcionario = {nome: 'Maria', salario: 2500}
const clone = {ativo: true, ...funcionario}
console.log(clone) //{ ativo: true, nome: 'Maria', salario: 2500 }

//Spread com array
const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = ['Julia', ...grupoA, 'Rafaela']
console.log(grupoFinal) //[ 'Julia', 'João', 'Pedro', 'Maria', 'Rafaela' ]