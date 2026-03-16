# Diagramas

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

# Diagramas UML do projeto - Sistema de Receitas Culinarias

## Diagrama de Casos de Uso

```mermaid
---
config:
  theme: redux-dark
---
flowchart LR
    Usuario["Usuário"]

    UC1((Listar receitas))
    UC2((Cadastrar receita))
    UC3((Ver detalhes da receita))

    Usuario --> UC1
    Usuario --> UC2
    UC3 -->|<<include>>| UC1
```

**Descrição:** Representa os **atores** e **funcionalidades principais** do sistema.

Neste exemplo, o **Usuario** pode cadastrar receitas, vizualizar receitas cadastradas e acessar os detalhes de cada receita.

**Principais elementos:**

- **Atores:** Usuário

- **Casos de Uso:** Cadastrar receita, Vizualizar receitas, Ver detalhe da receita

**Relações:**

- "Ver detalhe da receita" `<include>` "Vizualizar receitas"

**Atualizado em:** 15/03/2026 - Equipe 1

# Diagrama de sequência

**Descrição:**

```
-  Usuário abre o site
-  Frontend solicita receitas
-  API recebe a requisição
-  Controller busca as receitas
-  Controller retorna os dados
-  API envia os dados para o frontend
-  Frontend mostra as receitas na tela
```

# Diagrama:

```mermaid
---
config:
  theme: dark
---
sequenceDiagram
actor Usuario
participant Frontend
participant API
participant Controller

Usuario->>Frontend: Acessa página
Frontend->>API: GET /receitas
API->>Controller: getAll()
Controller-->>API: retorna lista de receitas
API-->>Frontend: JSON com receitas
Frontend-->>Usuario: Exibe receitas na tela
```

**Atualizado em:** 15/03/2026 - equipe 1
