# API Design - Sistema de Receitas Culinárias

## 1. Recursos da API (Resources)

A API do sistema é organizada em torno dos seguintes recursos principais:

- /receitas – Gerenciamento das receitas culinárias.
- /usuarios – Cadastro e autenticação de usuários.
- /auth – Processo de login e controle de acesso à área privada.

---

## 2. Tabela de Endpoints (Rotas REST planejadas)

| Recurso | Verbo | Endpoint | Descrição |
|--------|------|----------|-----------|
| Receita | GET | /receitas | Listar todas as receitas |
| Receita | GET | /receitas/{id} | Buscar receita por ID |
| Receita | POST | /receitas | Criar nova receita |
| Receita | DELETE | /receitas/{id} | Excluir receita |
| Usuário | POST | /usuarios | Criar usuário |
| Auth | POST | /auth/login | Realizar login |
| Auth | POST | /auth/logout | Fazer logout (sair da conta) |

## 3. Estrutura de Requests e Responses (JSON)

📍 **Exemplo de endpoint com sucesso e erro**

**(POST)/receitas**

 **Request Body (JSON):**

```json
{
  "nome": "Bolo de chocolate",
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
  "id": "101",
  "nome": "Bolo de chocolate",
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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "nome": "Gabriele",
    "email": "gabriele.alves@email.com"
  },
  "mensagem": "Login realizado com sucesso!"
}
```

Resposta de erro - 400 Unauthorized:
```json
{
  "error": "AUTH_ERROR",
  "message": "E-mail ou senha incorretos."
}
```

## 4. Status Codes previstos por rota

| Rota                  | Sucesso     | Erros possíveis                        |
| --------------------- | ----------- | -------------------------------------- |
| GET /receitas         | 200 OK      | 500 (erro interno)                     |
| GET /receitas/{id}    | 200 OK      | 404 (receita não encontrada)           |
| POST /receitas        | 201 Created | 400 (dados inválidos)                  |
| DELETE /receitas/{id} | 200 OK      | 404 (não encontrada)                   |
| POST /usuarios        | 201 Created | 400 (dados inválidos), 409 (já existe) |
| POST /auth/login      | 200 OK      | 401 (não autorizado)                   |
| POST /auth/logout     | 200 OK      | —                                      |

