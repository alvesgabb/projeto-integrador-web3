// Aqui se faz as importações
const express = require("express");
const routes = express.Router();
const receitaController = require("../controllers/receitaController");


// GET listar receita
routes.get("/receitaTotal", receitaController.getAll);

// POST criar receita
routes.post("/receitaCriar", receitaController.create);



//DELETE especifico


module.exports = routes;


