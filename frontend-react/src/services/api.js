const Base_URL = "http://localhost:3001";

// Lista todas as receitas
export async function fetchReceita() {
  const resposta = await fetch(`${Base_URL}/receitas`);
  if (!resposta.ok) throw new error("Erro ao buscar receita");
  return resposta.json();
}

// Busca uma receita específica
export async function fetchReceitaId(id) {
  const resposta = await fetch(`${Base_URL}/receitas/${id}`);
  if (resposta.status === 404) {
    const erro = new Error("Receita não encontrada");
    erro.status = 404;
    throw erro;
  }
  if (!resposta.ok) throw new Error("Erro ao buscar receita");
  return resposta.json();
}

// Cria uma nova receita
export async function createReceita(data) {
  const resposta = await fetch(`${Base_URL}/receitas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: data.nome,
      imagem: data.imagem,
      ingredientes: data.ingredientes,
      modo_de_preparo: data.modo_de_preparo,
      usuarioId: data.usuarioId || 1
  }),
});

 if (!resposta.ok) throw new Error("Erro ao criar receita");
  return resposta.json();
}

// Remove receita (para futuras exclusões)
export async function deleteReceita(id) {
  const resposta = await fetch(`${Base_URL}/receitas/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao excluir receita");
}

// Atualiza uma receita
export async function updateReceita(id, data) {
  const resposta = await fetch(`${Base_URL}/receitas/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: data.nome,
      imagem: data.imagem,
      ingredientes: data.ingredientes,
      modo_de_preparo: data.modo_de_preparo,
      usuarioId: data.usuarioId || 1
    }),
  });

  if (!resposta.ok) throw new Error("Erro ao atualizar receita");
  return resposta.json();
}