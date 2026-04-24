import db from "./database.js";

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
  )
`,
).run();

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS receitas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    imagem TEXT,
    ingredientes TEXT NOT NULL,
    modo_de_preparo TEXT NOT NULL,
    usuarioId INTEGER NOT NULL,
    ativo INTEGER NOT NULL DEFAULT 1,
    criadoEm TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
  )
`,
).run();
