# Desafio #3 - Escrevendo as classes de um Jogo

Uma breve descrição sobre o que esse projeto faz e para quem ele é

**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos
## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)
Além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)
## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
ex: O mago atacou usando magia
    guerreiro atacou usando espada

## Como ficou o código:)

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

## Tela com a execução do programa...

![](https://github.com/AdaoElias/Desafio-3_Logica_Dio/blob/main/Erro.png)

1. Coloquei o nome errado pEDRO, para deixa-lo corrigir.
2. Inseri um nome como se fosse idade, ele não permitiu.
3. Colocei a idade com numeração errada 16.8, ele vai pegar apenas o numero inteiro, ignorando o restante.
4. Coloquei um tipo que não estava na lista ele não aceitou.
5. formatei a resposta para sair toda em maiuscula, independente de como tenha sido escrita.
