const express = require ('express');
const app = express ();
const PORT = 3001;

app.use(express.json());

let clientes = [];

app.get('/clientes', (req,res) =>{
    res.json(clientes);
})

app.post('/clientes', (req,res) =>{
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json(cliente);
})

app.put('/clientes/:id', (req,res) => {
    const id = req.params.id;
    const clienteAtualizado = req.body;
    clientes[id] = clienteAtualizado;
    res.json(clienteAtualizado);
})
app.patch('/clientes/:id', (req,res) =>{
    const id = req.params.id;
    const cliente = clientes[id];
    Object.assign (cliente, req.body);
    res.json(cliente);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})