/*Crie uma função que retorna o nome dos membros de um Map que tem o papel ADMIN no sistema.
1. Crie uma função getAdmins que recebe um Map;
2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema (Ex: 'Luiz' => 'Admin');
3. Dentro de getAdmin, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores. */

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if ( value === 'Admin') {
            admins.push(key)
        }        
    }
    return admins;
}
const usuarios = new Map();

usuarios.set ('Luiz','Admin');
usuarios.set ('Anna','User');
usuarios.set ('Fabio','Admin');
usuarios.set ('Marina','Admin');
usuarios.set ('André','User');
usuarios.set ('João','Admin');

console.log(getAdmins(usuarios));