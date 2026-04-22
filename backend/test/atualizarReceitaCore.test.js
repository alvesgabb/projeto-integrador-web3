// tests/atualizarReceitaCore.test.js

import { atualizarReceitaCore } from "../src/core/atualizarReceitaCore.js";

describe("atualizarReceitaCore", () => {
  let lista;

  beforeEach(() => {
    lista = [
      {
        id: 1,
        nome: "Bolo",
        imagem: "bolo.jpg",
        ingredientes: "farinha, ovos",
        modoPreparo: "misturar tudo",
        usuarioId: 1,
        ativo: true,
      },
    ];
  });

  test("atualiza nome com trim", () => {
    const receita = atualizarReceitaCore(lista, 1, {
      nome: " Bolo de Chocolate ",
    });
    expect(receita.nome).toBe("Bolo de Chocolate");
  });

  test("atualiza imagem com trim", () => {
    const receita = atualizarReceitaCore(lista, 1, { imagem: " bolo2.jpg " });
    expect(receita.imagem).toBe("bolo2.jpg");
  });

  test("atualiza ingredientes", () => {
    const receita = atualizarReceitaCore(lista, 1, {
      ingredientes: "farinha, ovos, chocolate",
    });
    expect(receita.ingredientes).toBe("farinha, ovos, chocolate");
  });

  test("atualiza modo de preparo", () => {
    const receita = atualizarReceitaCore(lista, 1, {
      modoPreparo: "misturar e assar",
    });
    expect(receita.modoPreparo).toBe("misturar e assar");
  });

  test("atualiza usuarioId", () => {
    const receita = atualizarReceitaCore(lista, 1, { usuarioId: 2 });
    expect(receita.usuarioId).toBe(2);
  });

  test("atualiza ativo", () => {
    const receita = atualizarReceitaCore(lista, 1, { ativo: false });
    expect(receita.ativo).toBe(false);
  });

  test("lança erro quando id não existe", () => {
    expect(() => atualizarReceitaCore(lista, 999, { nome: "X" })).toThrow(
      "Receita não encontrada",
    );
  });
});
