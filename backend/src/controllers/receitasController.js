import * as receitaModel from "../models/receitaModel.js";


//listar receita
export function listarReceitas(req,res) {
  const receitas = receitaModel.listarReceitas();
  res.json(receitas);
}


// Criar receita
export function criarReceita(req, res) {
  const {nome, imagem, ingredientes, modo_de_preparo, ativo} = req.body;

  if (!nome || !ingredientes || !modo_de_preparo) {
    return res.status(400).json({erro: "Campos obrigatórios: nome, ingredientes e modo de preparo",});
  }

  const novaReceita = receitaModel.criarReceita(
    nome.trim(),
    imagem ?? "",
    ingredientes,
    modo_de_preparo,
    ativo ?? 1);

    res.status(201).json(novaReceita);

}


//buscar receita por ID
export function buscarReceita(req,res) {
  const id = Number (req.params.id);
  const receita = receitaModel.buscarReceitaPorId(id);

  if (!receita) {
    return res.status (404).json({
      erro: "Receita não encontrada"
    });
  }

   res.json(receita);
}


// Atualizar receita
export function atualizarReceita(req, res) {
    const id = Number (req.params.id)
    const receitaExistente = receitaModel.buscarReceitaPorId(id);

    if (!receitaExistente) {
      return res.status(404).json({erro: "Receita não encontrada"});
    }
    const {nome, imagem, ingredientes, modo_de_preparo, ativo} = req.body;

    receitaModel.atualizarReceita(
      id,
      nome ?? receitaExistente.nome,
      imagem ?? receitaExistente.imagem,
      ingredientes ?? receitaExistente.ingredientes,
      modo_de_preparo ?? receitaExistente.modo_de_preparo,
      ativo ?? receitaExistente.ativo
    );

    res.json({mensagem: "Receita atualizada com sucesso"});
} 

// Deletar receita
export function deletarReceita(req, res) {
 const id = Number(req.params.id);
 const receita = receitaModel.buscarReceitaPorId(id);

     if (!receita) {
      return res.status(404).json ({
        erro: "Receita não encontrada"
      });
     }

     receitaModel.deletarReceita(id);

     res.status(204).send();
}