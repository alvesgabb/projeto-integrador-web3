# 10. Testes Unitários com Jest

Esta seção apresenta os testes unitários implementados com o framework Jest, aplicados ao sistema de receitas culinárias.
Esses testes garantem a confiabilidade das regras de negócio do backend, principalmente na camada Core (lógica principal do sistema).

## 10.1 Objetivo

Os testes unitários foram criados para:

- Validar funções isoladas da lógica do sistema;
- Garantir o correto funcionamento das regras de negócio;
- Verificar cenários de erro e entradas inválidas;
- Evitar regressões ao alterar o código;
- Aumentar a confiabilidade geral da aplicação.

## 10.2 Tecnologias Utilizadas
- Jest → framework de testes unitários
- Node.js → ambiente de execução dos testes

## 10.3 Como Executar os Testes

Instalar dependências:
```
npm install
```
Executar os testes:
```
npm run test
```
Os testes são reconhecidos automaticamente pelos arquivos:
```
*.test.js
*.spec.js
```

## 10.4 Organização dos Testes

Os testes foram organizados na pasta:
```
/backend/test
```

## 10.5 Testes Implementados no Projeto

A estratégia de testes do sistema de receitas culinárias foca na validação da Core Business Logic, garantindo que as principais operações funcionem corretamente.

Os testes utilizam listas simuladas (mocks simples em memória), sem dependência do banco de dados.

## Categorias de Testes

| Categoria | Objetivo | Arquivos |
|----------|----------|----------|
| Criação de Receita | Validar criação de receitas com dados corretos e padrões | criarReceitaCore.test.js |
| Atualização de Receita | Validar atualização de campos e regras de negócio | atualizarReceitaCore.test.js |
| Exclusão de Receita | Garantir remoção correta e tratamento de erros | deletarReceitaCore.test.js |
| Validação de Campos | Verificar obrigatoriedade de dados | criarReceitaCore.test.js |
| Tratamento de Erros | Garantir que funções lancem erros corretamente | todos os testes |

## 10.6 Exemplos de Testes Implementados
- Exemplo 1: Criação de Receita

Arquivo: criarReceitaCore.test.js
```
test("cria receita válida", () => {
  const r = criarReceitaCore({
    nome: "Bolo de Chocolate",
    imagem: "link.jpg",
    ingredientes: ["Farinha", "Ovos"],
    modo_de_preparo: "Misturar e assar",
    usuarioId: "usuario",
    ativo: true
  });

  expect(r.nome).toBe("Bolo de Chocolate");
  expect(r.ingredientes).toEqual([
    "2 xícaras de farinha de trigo",
    "3 ovos",
    "1 xícara de chocolate em pó"
  ]);
  expect(r.modo_de_preparo).toBe("Misture todos os ingredientes e asse por 40 minutos a 180°C.");
  expect(r.usuarioId).toBe("usuario");
  expect(r.ativo).toBe(true);
});
```
- Exemplo 2: Validação de Campos Obrigatórios
```
test("lança erro se nome não for enviado", () => {
  expect(() =>
    criarReceitaCore({
      ingredientes: ["Farinha"]
    })
  ).toThrow("Campos obrigatórios: nome e ingredientes");
});
```

- Exemplo 3: Atualização de Receita

Arquivo: atualizarReceitaCore.test.js
```
test("atualiza nome com trim", () => {
  const receita = atualizarReceitaCore(lista, 1, {
    nome: " Bolo de Chocolate "
  });

  expect(receita.nome).toBe("Bolo de Chocolate");
});
```

- Exemplo 4: Exclusão de Receita

Arquivo: deletarReceitaCore.test.js
```
test("deleta uma receita que existe", () => {
  deletarReceitaCore(lista, 1);
  expect(lista.length).toBe(1);
});
```

- Exemplo 5: Erro ao deletar receita inexistente
```
test("lança erro se a receita não existe", () => {
  expect(() => deletarReceitaCore(lista, 99))
    .toThrow("Receita não encontrada");
});
```

## 10.7 Benefícios dos Testes Unitários

Os testes trouxeram os seguintes benefícios ao projeto:

- Maior segurança ao modificar o código;
- Garantia de funcionamento da lógica principal;
- Redução de erros em produção;
- Facilidade de manutenção do sistema;
- Melhor entendimento das regras de negócio;
- Estrutura mais profissional e escalável.

## Conclusão

Os testes unitários garantem que o sistema de receitas culinárias funcione de forma confiável, principalmente na camada de lógica de negócio, permitindo evolução segura do projeto.