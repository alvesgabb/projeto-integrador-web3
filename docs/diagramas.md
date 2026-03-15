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
````mermaid
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
````

**Atualizado em:** 15/03/2026 