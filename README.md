# Sistema de receitas culinárias

Desenvolvimento de um sistema web para gerenciamento de receitas culinárias de uso própio, com autenticação de usuários e persistência de dados.

### Equipe: Gabriele Alves, Clarisse Gondim e José Vianney

## Funcionalidades Iniciais:

- Cadastro e login de usuários
- Cadastro de receitas
- Listagem de receitas

## Mapeamento das camadas

| **Frontend**                          | **Backend**                 | **Banco de dados**                    |
| :------------------------------------ | :-------------------------- | :------------------------------------ |
| Formulários de cadastro e login       | Implementação de endpoints  | Armazenamento de usuários             |
| Botão para cadastrar receitas         | Autenticação de de usuários | Armazenamento de receitas de usuários |
| Botão para listar as propias receitas |
| Envio de requisição para a API        |

## Diagrama de fluxo

```text
  [ Usuário ]
       |
       ▼
  [ Front-End ]
    • Formulários de cadastro e login
    • Botão para cadastrar/ listar receitas
    • Envio de requisição para a API

       |
       ▼
  [ Back-End ]
    • Implementação de endpoints
    • Autenticação de usuários
       |
       ▼
  [ Banco de Dados ]
    • Armazenamento de usuários
    • Armazenamento de receitas de usuários

```

## Aplicação nas funcionalidades

#### 1. Cadastro e Login de Usuários

- **Frontend:** O usuário insere e-mail e senha. O sistema valida os campos e envia a requisição para a API.
- **Backend:** Recebe os dados, valida as informações, verifica se o uruário ja existe, realiza a autenticação e salva os dados no banco de dados.
- **Banco de Dados:** Armazena as informações do usuário para permitir futuros acessos ao sistema.

#### 2. Cadastro de Receitas

- **Frontend:** O usuário autenticado preeche os dados da receita e envia as informações para a API.
- **Backend:** Valida se o usuário está autenticado, valida os dados da receita, associa a receita ao usuário logado e salva no banco.
- **Banco de Dados:** Armazena a receita vinculada ao ID do usuário.

#### 3. Listagem de Receitas

- **Frontend:** O usuário solicita a vizualização das receitas cadastradas e o sistema envia uma requisição para a API.
- **Backend:** Consulta o banco de dados filtrando as receitas pelo ID do usuário autenticado e retorna os dados para o front-end.
- **Banco de Dados:** Retorna apenas as receitas associadas ao usuário.

---
