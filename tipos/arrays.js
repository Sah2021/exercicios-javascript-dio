let array = []; /* inicializa com [] */

array.push(3) /*adiciona um elemento no array. Sempre no final do array */
array.push(2)
array.push(5)
array.push(8)
console.log(array, array.length); /* 3, 2, 5, 8 */

array.pop (); /* retira o último elemento do array */
console.log(array); /*3, 2, 5 */

array.shift() /* retira o primeiro elemento do array */

array.unshift(7) /* adiciona ao inicio da lista */
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);     
} /* mostra cada um dos elementos do array, em coluna */

console.log(array.includes(2)); /* se no meu array existe o número 2 */

console.log(array.every(item => item === 5)); /* para saber se todos os meus elementos são igual a 5 */

console.log(array.some(item => item === 5)); /* para saber se algum dos meus elementos é igual a 5 */

console.log(array.reverse()); /*inverte todos os elementos */

console.log(array.sort()); /* ordena os itens em ordem crescente, por padrão */