// Aqui se faz as importações
const express = require("express");
const routes = express.Router();
const receitasControlles = require("../controllers/receitasController");


// GET mostra receita
routes.get("/", receitasControlles.getAll);

// POST inserir receita
routes.post("/", receitasControlles.create);


module.exports = routes;


