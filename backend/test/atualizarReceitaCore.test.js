import { atualizarReceitaCore } from "../src/core/atualizarReceitaCore.js";

describe("atualizarReceitaCore", () => {
  let receitas;

  beforeEach(() => {
    // Reseta o array antes de cada teste
    receitas = [
      {
        id: 1,
        nome: "Bolo Simples",
        imagem: "",
        ingredientes: ["Farinha", "Ovo"],
        modo_de_preparo: "Misture tudo",
        usuarioId: 1,
        ativo: true,
      },
    ];
  });

  test("deve atualizar o nome e fazer trim", () => {
    const atualizada = atualizarReceitaCore(receitas, 1, {
      nome: "  Bolo de Festa  ",
    });
    expect(atualizada.nome).toBe("Bolo de Festa");
  });

  test("deve atualizar ingredientes e fazer trim em cada item", () => {
    const atualizada = atualizarReceitaCore(receitas, 1, {
      ingredientes: ["  Farinha de Trigo  ", " Açúcar "],
    });
    expect(atualizada.ingredientes).toEqual(["Farinha de Trigo", "Açúcar"]);
  });

  test("deve manter modo_de_preparo antigo se vier undefined", () => {
    const atualizada = atualizarReceitaCore(receitas, 1, {
      nome: "Bolo Novo", // manda um campo válido
      modo_de_preparo: undefined,
    });
    expect(atualizada.modo_de_preparo).toBe("Misture tudo"); // não alterou
    expect(atualizada.nome).toBe("Bolo Novo"); // esse sim alterou
  });

  test("deve atualizar o campo ativo para false", () => {
    const atualizada = atualizarReceitaCore(receitas, 1, { ativo: false });
    expect(atualizada.ativo).toBe(false);
  });

  test("deve lançar erro se receita não for encontrada", () => {
    expect(() => atualizarReceitaCore(receitas, 99, { nome: "X" })).toThrow(
      "Receita não encontrada.",
    );
  });

  test("deve lançar erro se nenhum campo válido for enviado", () => {
    expect(() => atualizarReceitaCore(receitas, 1, {})).toThrow(
      "Nenhum campo válido para atualizar foi enviado.",
    );
  });

  test("deve lançar erro se nome for atualizado para vazio", () => {
    expect(() => atualizarReceitaCore(receitas, 1, { nome: "   " })).toThrow(
      "O campo 'nome' não pode ser vazio.",
    );
  });
});
