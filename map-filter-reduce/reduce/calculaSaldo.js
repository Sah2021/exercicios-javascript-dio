/*
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

function calculaSaldo (saldo, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce ((acc, item) => acc - item.preco, saldo);

    return `O saldo final será de ${saldoFinal} reais`;

}

lista = [
    {
        preco: 2,
        nome: 'maça',
    },
    {
        preco: 30,
        nome: 'roupa',
    },
    {
        preco: 25,
        nome: 'sapato',
    },
];

saldo = 100;

console.log(calculaSaldo (saldo, lista));