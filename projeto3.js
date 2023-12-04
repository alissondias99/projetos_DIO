class heroi {
    constructor (nome, tipo, idade){
        this.nome = nome
        this.tipo = tipo
        this.idade = idade
    }

}
let ataque = ''
let heroi1 = new heroi('Gekko', 'Ninja', 25)
if (heroi1.tipo == 'Guerreiro'){
    ataque = 'espada'
} else if (heroi1.tipo == 'Mago'){
    ataque = 'magia'
} else if (heroi1.tipo == 'Monge'){
    ataque = 'Artes marciais'
} else if (heroi1.tipo == 'Ninja'){
    ataque = 'shuriken'
}
console.log(`O ${heroi1.tipo} usou ${ataque}`)