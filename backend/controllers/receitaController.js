const receitaMoldel = require("../models/receitaModel");


//GET 
// Função de listar todas as receitas
function getAll(req, res) {
  try{
    const receita = receitaMoldel.listarTodos()
      res.json(receita)
  }
  catch(err){
    console.error("Erro ao listar receita:",err);
    res.status(500).json({erro:"Erro ao listar receita."})
  }
}

// POST 
// Função criar receita
function create(req,res){
  try{
const {nome, ingredientes, modo_preparo } = req.body;

  if (!nome || !ingredientes || !modo_preparo) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const receita = receitaMoldel.criar({nome,ingredientes,modo_preparo});

  console.log("Receita adicionada:", receita);
  return res.status(201).json(receita);
   }
   catch(err){
    console.error("Erro ao criar receita.",err)
    return res.status(500).json(({erro:"Erro ao criar receita."}))
   }
}

//DELETE
//Aqui irá ficar a função delete


module.exports = {
    getAll,
    create
}