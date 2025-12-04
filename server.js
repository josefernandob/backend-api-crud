const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

// ⚠️ SIMULAÇÃO DE BANCO DE DADOS
let products = [
    { id: 1, name: 'Smartphone', price: 1500.00 },
    { id: 2, name: 'Notebook', price: 3200.00 },
];
let nextId = 3;

// Middleware CORS (Permite que o app React Native acesse esta API)
app.use((req, res, next) => {
    // Permite requisições de qualquer origem (em ambiente de desenvolvimento)
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Necessário para lidar com o preflight request do PUT/DELETE
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});


// #################################################
// #           OPERAÇÕES CRUD (PRODUCTS)           #
// #################################################

// 1. CREATE (Cadastrar)
// Rota: POST /products
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        return res.status(400).send({ error: "Nome e preço são obrigatórios." });
    }
    const newProduct = {
        id: nextId++,
        name,
        price: parseFloat(price) // Garante que o preço seja número
    };
    products.push(newProduct);
    console.log(`Produto cadastrado: ${newProduct.name}`);
    res.status(201).send(newProduct);
});

// 2. READ (Ler - Todos)
// Rota: GET /products
app.get('/products', (req, res) => {
    res.status(200).send(products);
});

// 2. READ (Ler - Único)
// Rota: GET /products/:id
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).send({ error: "Produto não encontrado." });
    }
    res.status(200).send(product);
});

// 3. UPDATE (Editar)
// Rota: PUT /products/:id
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).send({ error: "Produto não encontrado." });
    }

    const { name, price } = req.body;
    products[index] = {
        ...products[index],
        name: name || products[index].name,
        price: price ? parseFloat(price) : products[index].price
    };
    console.log(`Produto atualizado: ${products[index].name}`);
    res.status(200).send(products[index]);
});

// 4. DELETE (Deletar)
// Rota: DELETE /products/:id
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);

    if (products.length === initialLength) {
        return res.status(404).send({ error: "Produto não encontrado." });
    }
    console.log(`Produto deletado (ID: ${id})`);
    res.status(204).send(); // 204 No Content
});


// 🖥️ Inicia o Servidor
module.exports = app;