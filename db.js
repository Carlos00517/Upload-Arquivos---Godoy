// Importa para interagir com o banco de dados 
const mongoose = require("mongoose");

//Carrega  variáveis de ambiente do arquivo .ENV
require("dotenv").config();

//Configura o mongoose para permitir consulta (Restritas)
mongoose.set("strictQuery", true);

// OBTEM  as variaveis do .ENV
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//Função para comectar ao DB
async function main() {
 await mongoose.connect(
   `mongodb+srv://${dbUser}:${dbPassword}@clusterapi.fpwjd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI`
    //Link do DB
 );
 // Exibe a mensagem ao usuário que realizou a conexão
 console.log("Conectou ao banco de dados!");
}


//Caso ocorra o erro mostra uma mensagem
main().catch((err) => console.log(err));


//Exportar a função para utilizar em outro arquivo.
module.exports = main;