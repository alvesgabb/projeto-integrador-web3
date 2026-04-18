export function buscarReceitaCore(listaReceitas, id) {
  const receita = listaReceitas.find((r)=> r.id === id);

  if (!receita){
    throw new Error("Receita não encontrada");
  }

  return receita
}