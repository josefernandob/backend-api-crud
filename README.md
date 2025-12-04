Este é o backend da aplicação mobile desenvolvida em React Native (Desafio 2). A API é construída com Node.js e Express e tem a função de gerenciar as operações CRUD (Create, Read, Update, Delete) para a entidade 'Produto'.

## 🔗 Status e Endereço Público

A API está implantada publicamente, permitindo que o aplicativo mobile acesse os dados de qualquer lugar.

- **URL Base da API:** https://backend-api-crud-coral.vercel.app

## ⚙️ Tecnologias Utilizadas

- **Linguagem:** JavaScript (Node.js)
- **Framework:** Express
- **Simulação de DB:** Variável em memória (array)
- **Hospedagem (Deploy):** Vercel

## 🚀 Instalação e Execução Local (Opcional)

Para testar ou desenvolver esta API localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://www.youtube.com/watch?v=aVFHpD86RJQ](https://www.youtube.com/watch?v=aVFHpD86RJQ)
    cd backend-api-crud
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    npm start
    # O servidor rodará na porta 3000 (http://localhost:3000)
    ```

## 🌐 Endpoints da API

O recurso principal da API é `/products`. As seguintes rotas estão disponíveis:

| Método | Rota | Descrição | Corpo da Requisição (Body) | Resposta (Status Code) |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/products` | **Lê** todos os produtos. | - | 200 (Lista de Produtos) |
| **POST** | `/products` | **Cria/Cadastra** um novo produto. | `{ "name": "...", "price": 99.99 }` | 201 (Produto Criado) |
| **GET** | `/products/:id` | **Lê** um produto específico pelo ID. | - | 200 (Produto Único) |
| **PUT** | `/products/:id` | **Atualiza/Edita** um produto existente pelo ID. | `{ "name": "...", "price": 99.99 }` | 200 (Produto Atualizado) |
| **DELETE** | `/products/:id` | **Deleta** um produto pelo ID. | - | 204 (Sem Conteúdo) |

---
