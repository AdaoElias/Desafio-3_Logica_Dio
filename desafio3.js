const readline = require('readline');

// Criação da Classe herói para iniciar a aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.nomeMaiusculo = nome.toUpperCase(); // Ajuste: nome sempre em maiúsculas
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Ajuste: tipo sempre em minúsculas
    }

    // Método que define o tipo do ataque de cada personagem
    atacar() {
        let ataque;

        switch (this.tipo) { // Aqui, garantimos que this.tipo sempre será uma string válida
            case 'mago':
                ataque = 'MAGIA';
                break;
            case 'guerreiro':
                ataque = 'ESPADA';
                break;
            case 'monge':
                ataque = 'ARTES MARCIAIS';
                break;
            case 'ninja':
                ataque = 'SHURIKEN';
                break;
            default:
                ataque = 'UM ATAQUE NORMAL';
        }

        console.log("_______________________________________");
        console.log(`SUA IDADE É ${this.idade} ANOS.`);
        console.log(`O ${this.tipo.toUpperCase()} ${this.nomeMaiusculo} ATACOU USANDO ${ataque}`);
        console.log("_______________________________________");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta.trim()); // Removemos espaços extras para evitar erros
        });
    });
}

// Função principal para interação com o usuário
async function main() {
    console.log('========= CRIE SEU HERÓI =========');
    const nome = await perguntar('Digite o nome do herói: ');

    let idade;
    do {
        idade = parseInt(await perguntar('Digite a idade do herói: '), 10);
        if (isNaN(idade) || idade <= 0) {
            console.log('Idade inválida! Digite um número válido.');
        }
    } while (isNaN(idade) || idade <= 0); 

    let tipo;
    do {
        tipo = await perguntar('Digite o tipo do herói (mago, guerreiro, monge, ninja): ');
        tipo = tipo.toLowerCase(); // Ajuste: Sempre armazenamos `tipo` em minúsculas
        if (!['mago', 'guerreiro', 'monge', 'ninja'].includes(tipo)) {
            console.log('Tipo inválido! Tente novamente.');
        }
    } while (!['mago', 'guerreiro', 'monge', 'ninja'].includes(tipo));

    // Criando instanciamento do Herói com os valores corrigidos
    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();
    rl.close();
}

// Tratamento de erros
main().catch(err => console.error('Erro:', err));
