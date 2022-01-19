//ES8 - 2017

//Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //[ 1, 2, 3 ]
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá'
    }
}
console.log(pessoa.nome, pessoa.ola()) //Carla Olá

//Class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'au au!'
    }
}
console.log(new Cachorro().falar()) //au au!