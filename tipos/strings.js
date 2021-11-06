let nome = "João";
let sobrenome = "Pedro";

console.log(nome.concat(sobrenome));

let concatenado = nome.concat (sobrenome);

console.log(concatenado);
console.log(concatenado.length);

let exemplo = new String("blablabla");
console.log(exemplo); /*é um objeto */

let vazio = "";
console.log(vazio); /*declara uma string vazia */

let outroNome = "João"
console.log(outroNome[0], outroNome[1], outroNome[2], outroNome[3]); /*índice começa em 0 */
console.log(outroNome.length); /*tamanho começa do 1 */

console.log(concatenado = nome + " " + sobrenome); /*" " cria um espaço */
console.log(concatenado = nome + "\n" + sobrenome); /*\n = pula uma linha, \n\n = pula duas linhas...*/
console.log(`${nome} ${sobrenome}`); /*cria espaço entre os nomes */
console.log(`${nome} 

${sobrenome}`); /*pula linhas */

let frase = "Olá, tudo bem?"
console.log(frase.split(""), frase.length); /*Sem espaço. Separa as letras da string */
console.log(frase.split(" ").length); /*Com espaço. Separa as palavras da string */
console.log(frase.split(" "), frase.split(" ").length); /*mostra quantas palavras, mas não mostra a frase */
console.log(frase.split(" "), frase.split(" ").length); /*separa as palavras e mostra quantas palavras tem */

console.log(frase.includes("tudo")); /*Quero saber se na frase tem a palavra tudo - retorna true ou false */

console.log(frase.startsWith("R")); /*Com qual letra a frase começa - retorna true ou false */
console.log(frase.endsWith("?")); /*Com qual letra a frase termina - retorna true ou false*/

let stringModificada = frase.replace("," , "!"); /*muda a vírgula por !. Replace retorna uma outra frase. */
console.log(stringModificada);

