function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(frase) //resolve aceita só 1 param ou um objeto
        }, segundos * 1000)
    })
}
falarDepoisDe(2, 'Fala galera')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))
    
/*
reject(frase)
.catch(e => console.log(e))
*/