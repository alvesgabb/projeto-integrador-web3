// Aqui se faz as importações
const express = require("express");
const routes = express.Router();
const receitaControlles = require("../controllers/receitaController");


// GET mostra receita
routes.get("/receitaTotal", receitaControlles.getAll);

// POST inserir receita
routes.post("/receitaCriar", receitaControlles.create);

//DELETE especifico
//routes.delete("/:id", receitaControlles.deleteId);

module.exports = routes;


//Essa branch é a estrutura do backend