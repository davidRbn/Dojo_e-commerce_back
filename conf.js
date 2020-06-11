const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost' , // adresse du serveur
user :  'root', // le nom d'utilisateur
<<<<<<< HEAD
password :  's8@%0oui23sLso', // le mot de passe
=======
password :  'aZertY*1308', // le mot de passe
>>>>>>> c96eb54c1063ae7b0b84c98a53b10b5bfe91d034
database :  'ebusiness'
});
module.exports = connection;