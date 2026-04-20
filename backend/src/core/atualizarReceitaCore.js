/**
 * Aplica as atualizações em uma receita existente.
 * Segue o mesmo padrão do criarReceitaCore do colega.
 * @param {Array} repositorio - O array de receitas
 * @param {number} id - ID da receita a atualizar
 * @param {object} dadosUpdate - Campos a serem atualizados
 * @throws {Error} Se não encontrar a receita ou validação falhar
 * @returns {object} A receita já atualizada
 */
export function atualizarReceitaCore(repositorio, id, dadosUpdate) {
  const receita = repositorio.find((r) => r.id === id);

  if (!receita) {
    throw new Error("Receita não encontrada.");
  }

  const { nome, imagem, ingredientes, modo_de_preparo, ativo } = dadosUpdate;

  // Valida se pelo menos um campo foi enviado, igual lógica simples do colega
  if (
    nome === undefined &&
    imagem === undefined &&
    ingredientes === undefined &&
    modo_de_preparo === undefined &&
    ativo === undefined
  ) {
    throw new Error("Nenhum campo válido para atualizar foi enviado.");
  }

  // Aplica updates seguindo o mesmo padrão de trim do criarReceitaCore
  if (nome !== undefined) {
    if (!nome.trim()) {
      throw new Error("O campo 'nome' não pode ser vazio.");
    }
    receita.nome = nome.trim();
  }

  if (imagem !== undefined) {
    receita.imagem = imagem?.trim() || "";
  }

  if (ingredientes !== undefined) {
    if (!Array.isArray(ingredientes)) {
      throw new Error("O campo 'ingredientes' deve ser uma lista.");
    }
    receita.ingredientes = ingredientes.map((ingrediente) =>
      ingrediente.trim(),
    );
  }

  if (modo_de_preparo !== undefined) {
    receita.modo_de_preparo = modo_de_preparo?.trim() || "";
  }

  if (ativo !== undefined) {
    receita.ativo = ativo ?? true;
  }

  return receita;
}
