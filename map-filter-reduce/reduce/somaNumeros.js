/* 1. Some todos os números de um array */

function somaNumeros (arr) {
    if (!arr || !arr.length) return;
    const soma = arr.reduce ((prev, curr) => prev + curr);

    return soma;
}
console.log(somaNumeros ([1,1,1,31]));