// src/core/atualizarReceitaCore.js

export function atualizarReceitaCore(listaReceitas, id, data) {
  const receita = listaReceitas.find((r) => r.id === id);

  if (!receita) {
    throw new Error("Receita não encontrada");
  }

  const { nome, imagem, ingredientes, modoPreparo, usuarioId, ativo } = data;

  if (nome !== undefined) receita.nome = nome.trim();
  if (imagem !== undefined) receita.imagem = imagem.trim();
  if (ingredientes !== undefined) receita.ingredientes = ingredientes;
  if (modoPreparo !== undefined) receita.modoPreparo = modoPreparo;
  if (usuarioId !== undefined) receita.usuarioId = usuarioId;
  if (ativo !== undefined) receita.ativo = ativo;

  return receita;
}
