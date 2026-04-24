import db from '../database/database.js';

// criar usuário
export function criarUsuario(nome, email, senha) {
  const stmt = db.prepare(`
    INSERT INTO usuarios (nome, email, senha)
    VALUES (?, ?, ?)
  `);

  const result = stmt.run(nome, email, senha);

  return {
    id: result.lastInsertRowid,
    nome,
    email
  };
}

// buscar por email (IMPORTANTE para login depois)
export function buscarUsuarioPorEmail(email) {
  const stmt = db.prepare(`
    SELECT * FROM usuarios WHERE email = ?
  `);

  return stmt.get(email);
}

// buscar por id
export function buscarUsuarioPorId(id) {
  const stmt = db.prepare(`
    SELECT * FROM usuarios WHERE id = ?
  `);

  return stmt.get(id);
}

// listar usuários 
export function listarUsuarios() {
  const stmt = db.prepare(`SELECT id, nome, email FROM usuarios`);
  return stmt.all();
}