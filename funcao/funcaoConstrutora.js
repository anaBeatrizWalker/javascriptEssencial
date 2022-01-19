function Carro(velocidadeMax = 200, delta = 5){
    //atributo privado (pertence só ao escopo da função)
    let velocidadeAtual = 0

    //método público (visível fora da função)
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const Uno = new Carro
Uno.acelerar()
console.log(Uno.getVelocidadeAtual()) //5

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual()) //20