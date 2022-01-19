const notas = [7.7, 6.5, 9.0, 8.9, 3.6, 7.1, 10.0]

//Sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(`Notas baixas: ${notasBaixas1}`)

//Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(`Notas baixas: ${notasBaixas2}`)