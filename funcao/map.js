const nums = [1, 2, 3, 4, 5]
let dobro = nums.map(e => {
    return e * 2
})
console.log(dobro) //[2, 4, 6, 8, 10]

const somaDez = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

soma = nums.map(somaDez)
console.log(soma)

trip = nums.map(triplo)
console.log(trip)

dinheiro = nums.map(paraDinheiro)
console.log(dinheiro)

resultado = nums.map(somaDez).map(triplo).map(paraDinheiro)
console.log(resultado)