// test/criarReceitaCore.test.js

import { criarReceitaCore } from "../src/core/criarReceitaCore.js";

describe("criarReceitaCore", () => {

  test("cria receita válida", () => {
    const r = criarReceitaCore({
      nome: "Bolo de Chocolate",
      imagem: "https://exemplo.com/bolo.jpg",
      ingredientes: [
        "2 xícaras de farinha",
        "1 xícara de açúcar",
        "1 xícara de chocolate em pó"
      ],
      modo_de_preparo: "Misture todos os ingredientes e asse por 40 minutos a 180°C.",
      usuarioId: "usuario",
      ativo: true
    });

    expect(r.nome).toBe("Bolo de Chocolate");
    expect(r.imagem).toBe("https://exemplo.com/bolo.jpg");
    expect(r.ingredientes).toEqual([
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó"
    ]);
    expect(r.modo_de_preparo).toBe("Misture todos os ingredientes e asse por 40 minutos a 180°C.");
    expect(r.usuarioId).toBe("usuario");
    expect(r.ativo).toBe(true);
  });

  test("lança erro se nome não for enviado", () => {
    expect(() => criarReceitaCore({
      ingredientes: ["Farinha"]
    }))
    .toThrow("Campos obrigatórios: nome e ingredientes");
  });

  test("lança erro se ingredientes não forem enviados", () => {
    expect(() => criarReceitaCore({
      nome: "Bolo"
    }))
    .toThrow("Campos obrigatórios: nome e ingredientes");
  });

  test("faz trim no nome", () => {
    const r = criarReceitaCore({
      nome: "  Bolo  ",
      ingredientes: ["Farinha"]
    });

    expect(r.nome).toBe("Bolo");
  });

  test("modo_de_preparo padrão é vazio", () => {
    const r = criarReceitaCore({
      nome: "Bolo",
      ingredientes: ["Farinha"]
    });

    expect(r.modo_de_preparo).toBe("");
  });

  test("usuarioId padrão é null", () => {
    const r = criarReceitaCore({
      nome: "Bolo",
      ingredientes: ["Farinha"]
    });

    expect(r.usuarioId).toBe(null);
  });

  test("ativo padrão é true", () => {
    const r = criarReceitaCore({
      nome: "Bolo",
      ingredientes: ["Farinha"]
    });

    expect(r.ativo).toBe(true);
  });

});


 