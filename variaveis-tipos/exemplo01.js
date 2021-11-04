/*Hosting*/
numberOne = 1; /*atribuição, não declaração*/ 

console.log(numberOne + 2);

var numberOne;
/*let numberOne Vai dar erro, não pode ser declarado depois */

var firstName = 'João';
var lastName = 'Souza';

if (firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = "Silva";

    console.log(lastName);
}

console.log(firstName, lastName);