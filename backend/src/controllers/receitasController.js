import { receitas } from "../data/receitas.js";
let contadorId = receitas.length + 1;

// GET - Listar todas
export function listarReceitas(req, res) {
  console.log("GET /receitas -> retornando lista");
  return res.status(200).json(receitas);
}

// POST - Criar nova receita
export function criarReceita(req, res) {
  const { nome, ingredientes, imagem, modo_de_preparo, usuarioId } = req.body;

  if (!nome || !ingredientes || !modo_de_preparo) {
    return res.status(400).json({
      error: "VALIDATION_ERROR",
      message: "O campo 'nome' é obrigatório e os 'ingredientes' devem ser uma lista."
    });
  }

  const novaReceita = {
    id: contadorId++,
    nome: nome.trim(),
    imagem: imagem || "https://th.bing.com/th/id/OIP.wNovgchbBdX1gT8vtnj56gHaFj?w=268&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ingredientes,
    modo_de_preparo,
    usuarioId: usuarioId || 1,
    ativo: ativo ?? true, 
    criadoEm: new Date().toISOString()
  };

  receitas.push(novaReceita);
  console.log("Receita adicionada:", novaReceita);
  return res.status(201).json(novaReceita);
}

// GET por id 
export function buscarReceita(req, res) {
  const id = Number(req.params.id);
  const receita = receitas.find((r) => r.id === id);

  if (!receita) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Receita não encontrada."
    });
  }
  res.json(receita);
}

// PUT - Atualizar
export function atualizarReceita(req, res) {
  const id = Number(req.params.id);
  const receita = receitas.find((r) => r.id === id);

  if (!receita) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Receita não encontrada."
    });
  }

  const { nome, imagem, ingredientes, modo_de_preparo, ativo } = req.body;

  if (!nome && !imagem && !ingredientes && !modo_de_preparo) {
    return res.status(400).json({ 
      error: "VALIDATION_ERROR",
      message: "O campo 'nome' é obrigatório e os 'ingredientes' devem ser uma lista." 
    });
  }

  if (nome !== undefined) receita.nome = nome.trim();
  if (imagem !== undefined) receita.imagem = imagem;
  if (ingredientes !== undefined) receita.ingredientes = ingredientes;
  if (modo_de_preparo !== undefined) receita.modo_de_preparo = modo_de_preparo;
  if (ativo !== undefined) receita.ativo = ativo;

  res.json(receita);
}

// DELETE por id
export function deletarReceita(req, res) {
  const id = Number(req.params.id);
  const index = receitas.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Receita não encontrada."
    });
  }

  receitas.splice(index, 1);
  res.status(200).json({ message: "Receita excluída com sucesso" });
}