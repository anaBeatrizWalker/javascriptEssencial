function Pessoa(){
    this.idade = 20
    
    setInterval(function(){
        this.idade++
        console.log(this.idade) //NaN
    }, 1000)
    //this não funciona porque quem o chama é a funçao de temporizador e não a função Pessoa
}
//new Pessoa

function Animal(){
    this.idade = 16
    
    setInterval(function(){
        this.idade++
        console.log(this.idade) //17, 18, 19...
    }.bind(this), 1000)
    //bind faz o this se referenciar a função Animal
}
//new Animal

function Crianca(){
    this.idade = 4

    const self = this
    
    setInterval(function(){
        self.idade++
        console.log(self.idade) //5, 6, 7...
    }, 1000)
}
new Crianca