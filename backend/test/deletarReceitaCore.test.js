import { deletarReceitaCore } from "../src/core/deletarReceitaCore.js";

describe("deletarReceitaCore", () => {
  let lista;

  beforeEach(() => {
    lista = [
      { id: 1, nome: "Bolo" },
      { id: 2, nome: "Suco" }
    ];
  });

  test("deleta uma receita que existe", () => {
    deletarReceitaCore(lista, 1);
    expect(lista.length).toBe(1);
  });

  
  test("lança erro se a receita não existe", () => {
    expect(() => deletarReceitaCore(lista, 99))
      .toThrow("Receita não encontrada");
  });


  test("lança erro ao tentar deletar em lista vazia", () => {
    expect(() => deletarReceitaCore([], 1))
      .toThrow("Receita não encontrada");
  });
});