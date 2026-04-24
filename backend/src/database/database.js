import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// recriando __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// caminho do banco
const dbPath = path.resolve(__dirname, "database.sqlite");

// criando conexão
const db = new Database(dbPath);

console.log("Conectado ao SQLite com better-sqlite3!");

export default db;
