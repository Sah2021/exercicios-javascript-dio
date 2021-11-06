// Solução 01

function verifica(string) {
    if (!string)  return "string inexistente"; // quando não passar uma string. !string faz a verificação se o valor da string é um valor verdadeiro
    /*split = separa as letras, reverse = inverte a palavra, join = junta os elementos do array, sem separaras letras e === string, para verificar se tudo isso é igual a palavra recebida*/
    return string.split("").reverse().join("") === string;      
    
}
console.log(verifica("ovo")); //true
console.log(verifica("gato")); // false

//Solução 02
// faz duas checagem a cada loop, assim precisamos percorrer apenas metade da string
function verifica02 (string) {
    if (!string)  return "string inexistente"; 

    for (let i = 0; i < string.length / 2; i++) {
        if (string [i] !== string[string.length - 1 - i]) {
            return false;
        }        
    }
    return true;
}
console.log(verifica02("abba"));
console.log(verifica02("bola"));