const Database = require("better-sqlite3")
const path = require ("path")

const DB_PATH = path.join(__dirname, "data" ,"database.sqlite");

function openDB(){
    const db = new Database(DB_PATH)

    //Garantir tabela de receitas
    
    db.prepare(
        `CREATE TABLE IF NOT EXISTS receita(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        ingredientes TEXT NOT NULL,
        modo_preparo TEXT NOT NULL)`).run();

    return db;
}

const db = openDB()
module.exports = db

//Essa branch é a estrutura do backend