class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Objeto para definir o ataque com base no tipo
        const ataques = {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        };

        // Verifica se o tipo está no objeto
        if (ataques[this.tipo]) {
            const ataque = ataques[this.tipo];
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else {
            console.log(`o ${this.tipo} não tem um ataque definido`);
        }
    }
}

// Exemplo de uso
const hero1 = new Heroi("Gandalf", 100, "mago");
hero1.atacar();  // Saída: o mago atacou usando magia

const hero2 = new Heroi("Aragorn", 87, "guerreiro");
hero2.atacar();  // Saída: o guerreiro atacou usando espada

const hero3 = new Heroi("Master Roshi", 300, "monge");
hero3.atacar();  // Saída: o monge atacou usando artes marciais

const hero4 = new Heroi("Naruto", 17, "ninja");
hero4.atacar();  // Saída: o ninja atacou usando shuriken
