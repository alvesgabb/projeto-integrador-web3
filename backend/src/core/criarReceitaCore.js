// src/core/criarReceitaCore.js

export function criarReceitaCore(data) {
  const { nome, imagem, ingredientes, modo_de_preparo, usuarioId, ativo } = data;

  // Validações simples
  if (!nome || ingredientes === undefined) {
    throw new Error("Campos obrigatórios: nome e ingredientes");
  }

  const receita = {
    nome: nome.trim(),
    imagem: imagem?.trim() || "",
    ingredientes: ingredientes.map((ingrediente) => ingrediente.trim()),
    modo_de_preparo: modo_de_preparo?.trim() || "",
    usuarioId: usuarioId ?? null,
    ativo: ativo ?? true,
  };

  return receita;
}