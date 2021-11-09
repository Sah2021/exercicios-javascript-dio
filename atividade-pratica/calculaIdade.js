/*Dada uma função calculaIdade, utilize os métodos call e apply para modificar o valor  de this.  Crie seus próprios objetos para esta atividade.*/

function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Anna',
    idade: 25
};
const pessoa2 = {
    nome: 'Mario',
    idade: 30
};
const animal = {
    nome: 'Chico',
    idade: 3,
    raca: 'SRD'
};
//Call
console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 7));

//Apply
console.log(calculaIdade.apply(pessoa1,[25]));
console.log(calculaIdade.apply(animal, [2]));