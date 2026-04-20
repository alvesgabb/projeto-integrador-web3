export function deletarReceitaCore(listaReceitas, id) {
  const index = listaReceitas.findIndex((r) => r.id === id);

  if (index === -1) {
    throw new Error("Receita não encontrada");
  }

  listaReceitas.splice(index, 1);
}