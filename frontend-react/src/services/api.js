import { RECEITAS } from "../mock/receitasData.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 1. Buscar todas as receitas 
export async function fetchProducts() {
  await delay(500);
  return RECEITAS;
}

// 2. Buscar uma receita específica pelo ID
export async function fetchProductById(id) {
  await delay(500);
  const found = RECEITAS.find((r) => r.id === id);
  if (!found) {
    const err = new Error("Receita não encontrada");
    err.status = 404;
    throw err;
  }
  return found;
}

// 3. Cadastrar nova receita 
export async function createProduct(data) {
  await delay(500);
  
  
  const novaReceita = {
    id: Date.now().toString(), 
    nome: data.nome,
    ingredientes: data.ingredientes,
    modo_preparo: data.modo_preparo,
    data_criacao: new Date().toLocaleDateString(),
  };

  RECEITAS.push(novaReceita); 
  return novaReceita;
}

export async function deleteProduct(id) {
  await delay(500);
  
  const index = RECEITAS.findIndex((r) => r.id.toString() === id.toString());

  if (index !== -1) {
    RECEITAS.splice(index, 1);
    return { success: true };
  }

  throw new Error("Receita não encontrada para deletar");
}