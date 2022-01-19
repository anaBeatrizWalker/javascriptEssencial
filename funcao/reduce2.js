const alunos = [
    { nome: "Ana Beatriz", nota: 9.5, bolsista: false },
    { nome: "Gustavo", nota: 10, bolsista: true },
    { nome: "Cláudia", nota: 8.7, bolsista: false },
    { nome: "Júlia", nota: 6.4, bolsista: true },
    { nome: "Nilson", nota: 8.9, bolsista: false },
]
//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))