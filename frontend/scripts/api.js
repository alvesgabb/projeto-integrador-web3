// frontend/scripts/api.js
const BASE_URL = "http://localhost:3000";

// Função para buscar receitas (GET)
export async function getAllReceitas() {
  const resposta = await fetch(`${BASE_URL}/receitas`);
  if (!resposta.ok) throw new Error("Erro ao buscar receitas");
  return resposta.json();
}
