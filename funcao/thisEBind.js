const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar() //Bom dia

const falar = pessoa.falar
falar() //undefined

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa() //Bom dia