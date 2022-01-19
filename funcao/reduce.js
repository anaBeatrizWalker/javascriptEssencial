const alunos = [
    { nome: "Ana Beatriz", nota: 9.5, bolsista: false },
    { nome: "Gustavo", nota: 10, bolsista: true },
    { nome: "Cláudia", nota: 8.7, bolsista: false },
    { nome: "Júlia", nota: 6.4, bolsista: true },
    { nome: "Nilson", nota: 8.9, bolsista: false },
]
console.log(`Notas: ${alunos.map(a => a.nota)}`)

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual /*indice, array*/){
    console.log(acumulador, atual) //passo a passo
    return acumulador + atual
}, 0 /*valor inicial*/)

console.log(resultado)