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

---

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

