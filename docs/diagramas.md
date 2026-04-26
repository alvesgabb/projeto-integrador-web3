# Diagramas do projeto - Sistema de Receitas Culinárias

## Diagrama de Fluxo do Sistema

```mermaid
flowchart TD

A[Usuário acessa o sistema] --> B[Frontend React]

B --> C{Usuário logado?}

C -- Não --> D[Login]
D --> E[POST /usuarios/login]
E --> F{Credenciais válidas?}
F -- Não --> D
F -- Sim --> G[Dashboard]

C -- Sim --> G

G --> H[Listar Receitas]
G --> I[Criar Receita]
G --> J[Editar Receita]
G --> K[Ver Detalhes]
G --> L[Excluir Receita]

H --> M[GET /receitas]
I --> N[POST /receitas]
J --> O[PUT /receitas/:id]
K --> P[GET /receitas/:id]
L --> Q[DELETE /receitas/:id]

M --> R[(SQLite)]
N --> R
O --> R
P --> R
Q --> R
```
## Descrição

O diagrama de fluxo representa o caminho que o usuário percorre dentro do sistema de receitas, desde o acesso inicial até as operações de CRUD.

## Principais elementos

- Usuário  
- Frontend React  
- API Backend  
- Banco de dados SQLite  

## Relações

- O frontend comunica com o backend via requisições HTTP  
- O backend processa regras de negócio e acessa o banco  
- O banco armazena e retorna dados das receitas e usuários  

# Diagrama de caso de uso

```mermaid
flowchart TD

U[Usuário]

U --> UC1[Login]
U --> UC2[Visualizar Receitas]
U --> UC3[Criar Receita]
U --> UC4[Editar Receita]
U --> UC5[Excluir Receita]
U --> UC6[Ver Detalhes da Receita]
```
## Descrição

O diagrama de caso de uso representa as funcionalidades disponíveis para o usuário dentro do sistema.

## Principais elementos

- Usuário (ator principal)  
- Funcionalidades do sistema (casos de uso)  

## Relações

- O usuário interage diretamente com todas as funcionalidades  
- Cada caso de uso representa uma ação disponível no sistema  
- As ações dependem da autenticação para acesso completo  

## Diagrama de Entidades 
```mermaid
flowchart TD

USUARIO[Usuario]
RECEITA[Receita]

USUARIO -->|cria| RECEITA

USUARIO --> U1[id]
USUARIO --> U2[nome]
USUARIO --> U3[email]
USUARIO --> U4[senha]

RECEITA --> R1[id]
RECEITA --> R2[nome]
RECEITA --> R3[imagem]
RECEITA --> R4[ingredientes]
RECEITA --> R5[modo_de_preparo]
RECEITA --> R6[usuarioId]
RECEITA --> R7[ativo]
```
## Descrição

O diagrama de entidades representa a estrutura do banco de dados e como as tabelas se relacionam.

## Principais elementos

- Usuário  
- Receita  

## Relações

- Um usuário pode criar várias receitas  
- Cada receita pertence a um único usuário  
- A relação é de 1 para muitos (1:N)  

## Diagrama de Sequência

```mermaid
sequenceDiagram

participant U as Usuário
participant F as Frontend
participant API as api.js
participant C as Controller
participant M as Model
participant DB as SQLite

U->>F: Preenche formulário
F->>API: createReceita(data)
API->>C: POST /receitas
C->>M: criarReceita()
M->>DB: INSERT INTO receitas
DB-->>M: ID criado
M-->>C: receita criada
C-->>API: JSON resposta
API-->>F: sucesso
F-->>U: Atualiza interface
```
## Descrição

O diagrama de sequência mostra como ocorre a criação de uma receita passo a passo dentro do sistema.

## Principais elementos

- Usuário  
- Frontend React  
- API  
- Controller  
- Model  
- Banco de dados  

## Relações

- O usuário inicia a ação no frontend  
- O frontend envia requisição para API  
- O backend processa a lógica e salva no banco  
- O banco retorna confirmação de criação  
- O frontend atualiza a interface  
