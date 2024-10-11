//Constructor func
function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa(`Beta`, `Caldas`, 19);
console.log(pessoa1)

const pessoa2 = {
    nome: `Josias`,
    sobrenome:  `Guilherme`,
    idade: 0,

    fala()  {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()


