const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost' , // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  's8@%0oui23sLso', // le mot de passe
database :  'ebusiness'
});
module.exports = connection;