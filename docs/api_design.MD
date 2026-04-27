# API Design - Sistema de Receitas Culinárias

## 1. Recursos da API (Resources)

A API do sistema é organizada em torno dos seguintes recursos principais:

- /receitas – Gerenciamento das receitas culinárias (Listagem, cadastro, edição e exclusão).
- /usuarios – Gerenciamentos de usuários, incluindo o cadastro de novas contas e o login.

---

## 2. Tabela de Endpoints (Rotas REST planejadas)

| Recurso | Verbo | Endpoint | Descrição |
|--------|------|----------|-----------|
| Receita | GET | /receitas | Listar todas as receitas |
| Receita | GET | /receitas/{id} | Buscar receita por ID |
| Receita | POST | /receitas | Criar nova receita |
| Receita | PUT | /receitas/{id} | Atualizar receita existente |
| Receita | DELETE | /receitas/{id} | Excluir receita |
| Usuário | POST | /usuarios | Criar usuário |
| Usuário | GET | /usuarios | Listar usuários |
| Usuário | POST | /usuarios/login | Realizar login |

## 3. Estrutura de Requests e Responses (JSON)

📍 **Exemplo de endpoint com sucesso e erro**

**(POST)/receitas**

 **Request Body (JSON):**

```json
{
  "nome": "Bolo de chocolate",
  "imagem": "https://receitasdamama.pt/wp-content/uploads/2023/07/Bolo-de-Chocolate-1.webp",
  "ingredientes": [
    "2 xícaras de farinha de trigo",
    "3 ovos"
  ],
  "modo_de_preparo": [
    "Tempo de preparo 1h",
    "1- Massa: Bata os ovos..."
  ],
  "usuarioId": 1
}
 ```

Resposta de sucesso – 201 Created:
```json
{
  "nome": "Bolo de chocolate",
  "imagem": "URL_DA_IMAGEM",
  "ingredientes": ["Trigo", "Ovos", "Chocolate"],
  "modo_de_preparo": ["Bater tudo", "Assar"],
  "usuarioId": 1

}

```
Resposta de erro – 400 Bad Request:
```json
{
  "error": "VALIDATION_ERROR",
  "message": "O campo 'nome' é obrigatório e os 'ingredientes' devem ser uma lista."
}
```

**(POST)/login**

**Request Body (JSON)**

```json
{
  "email": "gabriele.alves@email.com",
  "senha": "123"
}
```

Resposta de sucesso - 200 Created:
```json
{
  "mensagem": "Login realizado com sucesso",
  "usuario": {
    "id": 1,
    "nome": "Gabriele",
    "email": "gabriele.alves@email.com"
  }
}
```

Resposta de erro - 401 Unauthorized:
```json
{
  "erro": "Senha inválida" 
}
```

## 4. Status Codes previstos por rota

| Rota                  | Sucesso     | Erros possíveis                        |
| --------------------- | ----------- | -------------------------------------- |
| GET /receitas         | 200 OK      | 500 (erro interno)                     |
| GET /receitas/{id}    | 200 OK      | 404 (receita não encontrada)           |
| POST /receitas        | 201 Created | 400 (dados inválidos)                  |
| DELETE /receitas/{id} | 204 OK      | 404 (não encontrada)                   |
| PUT /receitas/{id}    | 200 OK      | 400 (dados inválidos), ou 404 (não encontrada) |
| POST /usuarios        | 201 Created | 400 (Falta nome/email/senha), 400 (Email já existe) |
| POST /usuarios/login      | 200 OK  | 400 (Falta dados), 404 (Usuário não existe), 401 (Senha errada) |