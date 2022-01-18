function area(largura, altura){
    const area = largura * altura
    if(area > 100){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}
console.log(area(10,6))
console.log(area(32, 26))
console.log(area())
console.log(area(5, 5, 6, 7, 6)) //pega só os primeiros valores