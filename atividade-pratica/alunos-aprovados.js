/* 1. Crie uma função com o array alunos com um número que irá representar a média final.
2. Percorra o array e popule um novo array auxiliar, apenas com os alunos cujas notas são maiores ou iguais à média final.
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '20',
    },
    {
        nome: 'Anna',
        nota: 3,
        turma: '20',
    },
];


function alunosAprovados (arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome}= arr[i];
        if (nota >= media ) {
            aprovados.push(nome)
            
        }      
        
    }
    return aprovados;
}
console.log(alunosAprovados (alunos, 5));