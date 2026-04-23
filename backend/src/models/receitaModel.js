import db from '../database/database.js';

// listar todas as receitas
export function listarReceitas() {
  const stmt = db.prepare('SELECT * FROM receitas');
  return stmt.all();
}

// buscar receita por id
export function buscarReceitaPorId(id) {
  const stmt = db.prepare('SELECT * FROM receitas WHERE id = ?');
  return stmt.get(id);
}

// criar receita
export function criarReceita(nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo) {
  const stmt = db.prepare(`
    INSERT INTO receitas (nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo);

  return {
    id: result.lastInsertRowid,
    nome,
    imagem,
    ingredientes,
    modo_de_preparo,
    usuarioId,
    ativo: 1
  };
}

// atualizar receita
export function atualizarReceita(id, nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo) {
  const stmt = db.prepare(`
    UPDATE receitas
    SET nome = ?, imagem = ?, ingredientes = ?, modo_de_preparo = ?, usuarioId = ?, ativo = ?
    WHERE id = ?
  `);

  return stmt.run(nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo, id);
}

// deletar receita
export function deletarReceita(id) {
  const stmt = db.prepare('DELETE FROM receitas WHERE id = ?');
  return stmt.run(id);
}