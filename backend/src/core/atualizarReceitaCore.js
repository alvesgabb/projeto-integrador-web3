// src/core/atualizarReceitaCore.js

export function atualizarReceitaCore(listaReceitas, id, data) {
  const receita = listaReceitas.find((r) => r.id === id);

  if (!receita) {
    throw new Error("Receita não encontrada");
  }

  const { nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo } = data;

  if (nome !== undefined) receita.nome = nome.trim();
  if (imagem !== undefined) receita.imagem = imagem.trim();
  if (ingredientes !== undefined) {
  receita.ingredientes = Array.isArray(ingredientes)
    ? ingredientes.map((i) => i.trim()).filter(Boolean)
    : String(ingredientes)
        .split(/[,;\n]/)   // aceita vírgula, ponto e vírgula ou quebra de linha
        .map((i) => i.trim())
        .filter(Boolean);
}
  if (modo_de_preparo !== undefined) receita.modo_de_preparo = modo_de_preparo;
  if (usuarioId !== undefined) receita.usuarioId = usuarioId;
  if (ativo !== undefined) receita.ativo = ativo;

  return receita;
}
