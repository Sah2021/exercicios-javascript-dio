let objs = {};

console.log( objs.name = 'Julia');
console.log( objs.age = 20);
console.log( Object.values(objs)); /* retorna os valores: Julia. 20 */
console.log( Object.keys(objs)); /* retorna as chaves: name, age */

let person = {
    name: "Joana",
    age: 20,
    adress: "Rua 2",
}
console.log(person);
console.log(person.age); /* retorna idade */
console.log(person.adress); /* retorna endereço */
console.log(person["age"]); /* tbm retorna a idade */

let mom = "nameOfMom"; /* cria uma chave */
person[mom] = "Maria"; /* cria um valor */
console.log(mom); /* nameOfMom */
console.log(person); /* nameOfMom: Maria */
console.log(person[mom]); /* Maria */
