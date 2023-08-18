const express = require('express')
const server = express();
server.use(express.json());

const eventos = [
    {id: 0, desc: 'Engenharia da mente', dia: '18', mes: 'MAIO', ano: '2023'},
    {id: 1, desc: 'World Neurotechnology', dia: '23', mes: 'MAIO', ano: '2023'},
    {id: 2, desc: 'WNF Virtual Reality', dia: '12', mes: 'MAIO', ano: '2023'},
    {id: 3, desc: 'Convencao de neurotecnologia', dia: '10', mes: 'MAIO', ano: '2023'},
    {id: 4, desc: 'Brain Tech Summit', dia: '21', mes: 'MAIO', ano: '2023'},
    {id: 5, desc: 'Apresentacoes sobre neurotecnologia', dia: '30', mes: 'MAIO', ano: '2023'},
]

// GET todos os eventos
server.get('/nextevents', (req, res) => {
    return res.json(eventos)
})

server.get('/nextevents/:index', (req, res) => {
    const { index } = req.params;
    return res.json(eventos[index]);
})

server.listen(3000);