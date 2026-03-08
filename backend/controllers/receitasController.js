let receitas = [];
let nextId = 1;

//GET
// Função de listar todas as receitas
function getAll(req, res) {
  console.log("GET /receitas -> retornando lista");
  return res.status(200).json(receitas);
}

// POST
// Função criar receita
function create(req, res) {
  const { nome, ingredientes, modo_preparo } = req.body;

  if (!nome || !ingredientes || !modo_preparo) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const receita = {
    id: nextId++,
    nome,
    ingredientes,
    modo_preparo,
  };

  receitas.push(receita);

  console.log("Receita adicionada:", receita);
  return res.status(201).json(receita);
}

module.exports = {
  getAll,
  create,
};
