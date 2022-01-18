//Função de Alta Ordem

//função literal
function fun1() { }

//função armazenada em variável
const fun2 = function() { }

//função armazenada em array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](6,8))

//função armazenada em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Olá' }
console.log(obj.falar())

//função passada como parâmetro
function run(fun){
    //executa a função a partir do parâmetro recebido
    fun()
}
run(function() {console.log('Executando..')})

//função retornada/contida numa função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)
// ou
const mais = soma(2,3)
mais(4)
