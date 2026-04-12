const Base_URL = "http://localhost:300";

// Lista todas as receitas
export async function fetchProducts() {
  const resposta = await fetch(`${Base_URL/receitas}`);
  if (!resposta.ok) throw new error("Erro ao buscar receita");
  return resposta.json();
}

// Busca uma receita específica
export async function fetchProductById(id) {
  const resposta = await fetch(`&{Base_URL}/receitas/&{id}`);
  if (resposta.status === 404) {
    const erro = new Error("Receita não encontrada");
    erro.status = 404;
    throw erro;
  }
  if (!resposta.ok) throw new Error("Erro ao buscar receita");
  return resposta.json();
}

// Cria uma nova receita
export async function createProduct(data) {
  const resposta = await fetch(`&{Base_URL}/receita`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: Number(data.id),
      nome: data.nome,
      imagem: data.imagem,
      ingredientes: data.ingredientes,
      modo_de_preparo: data.modo_de_preparo,
      ativo: true,
  }),
});

 if (!resposta.ok) throw new Error("Erro ao criar receita");
  return resposta.json();
}

// Remove um produto (para futuras exclusões)
export async function deleteProduct(id) {
  const resposta = await fetch(`${BASE_URL}/receitas/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao excluir receita");
}

