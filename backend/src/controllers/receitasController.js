// src/controllers/receitas.controller.js

import { receitas } from "../data/receitas.js";

// Importações diretas dos arquivos separados
import { criarReceitaCore } from "../core/criarReceitaCore.js";
import { listarReceitasCore } from "../core/listarReceitaCore.js";
import { buscarReceitaCore } from "../core/buscarReceitaCore.js";
import { atualizarReceitaCore } from "../core/atualizarReceitaCore.js";
import { deletarReceitaCore } from "../core/deletarReceitaCore.js";

let contadorId = receitas.length + 1;


//listar receita
export function listarReceitas(req,res) {
  const lista = listaReceitasCore(receitas)
  res.json(lista);
}

// Criar receita
export function criarReceita(req, res) {
<<<<<<< HEAD
  const { nome, ingredientes, imagem, modo_de_preparo, usuarioId, ativo } =
    req.body;

  if (!nome || !ingredientes || !modo_de_preparo) {
    return res.status(400).json({
      error: "VALIDATION_ERROR",
      message:
        "O campo 'nome' é obrigatório e os 'ingredientes' devem ser uma lista.",
    });
  }

  const novaReceita = {
    id: contadorId++,
    nome: nome.trim(),
    imagem:
      imagem ||
      "https://th.bing.com/th/id/OIP.wNovgchbBdX1gT8vtnj56gHaFj?w=268&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ingredientes,
    modo_de_preparo,
    usuarioId: usuarioId || 1,
    ativo: ativo ?? true,
    criadoEm: new Date().toISOString(),
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
      message: "Receita não encontrada.",
    });
=======
  try {
    // 1) Aplica regra de negócio
    const dadosReceita = criarReceitaCore(req.body);

    // 2) Controller adiciona dados específicos do HTTP/sistema
    const novaReceita = {
      id: contadorId++,
      ...dadosReceita,
      criadoEm: new Date().toISOString()
    };

    // 3) Persistência da "base" em memória
    receitas.push(novaReceita);

    // 4) Resposta HTTP
    res.status(201).json(novaReceita);

  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

//buscar receita por ID
export function buscarReceita(req,res) {
  try{
    const id = Number (req.params.id)

    const receita = buscarReceitaCore(receitas,id);

    res.json(receita);

  } catch (erro) {
    res.status(404).json({erro: erro.message})
>>>>>>> 99ad9fa05512db150c9f8a9ee60b98c810236fd0
  }
}

// Atualizar receita
export function atualizarReceita(req, res) {
  try {
    const id = Number(req.params.id);

<<<<<<< HEAD
  if (!receita) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Receita não encontrada.",
    });
  }

  const { nome, imagem, ingredientes, modo_de_preparo, ativo } = req.body;

  if (!nome && !imagem && !ingredientes && !modo_de_preparo) {
    return res.status(400).json({
      error: "VALIDATION_ERROR",
      message:
        "O campo 'nome' é obrigatório e os 'ingredientes' devem ser uma lista.",
    });
  }

  if (nome !== undefined) receita.nome = nome.trim();
  if (imagem !== undefined) receita.imagem = imagem;
  if (ingredientes !== undefined) receita.ingredientes = ingredientes;
  if (modo_de_preparo !== undefined) receita.modo_de_preparo = modo_de_preparo;
  if (ativo !== undefined) receita.ativo = ativo;

  res.json(receita);
=======
    const receitaAtualizada = atualizarReceitaCore(receitas, id, req.body);

    res.json(receitaAtualizada);

  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
>>>>>>> 99ad9fa05512db150c9f8a9ee60b98c810236fd0
}

// Deletar receita
export function deletarReceita(req, res) {
  try {
    const id = Number(req.params.id);

<<<<<<< HEAD
  if (index === -1) {
    return res.status(404).json({
      error: "NOT_FOUND",
      message: "Receita não encontrada.",
    });
  }

  receitas.splice(index, 1);
  res.status(200).json({ message: "Receita excluída com sucesso" });
}
=======
    deletarReceitaCore(receitas, id);

    res.status(204).send();

  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
}
>>>>>>> 99ad9fa05512db150c9f8a9ee60b98c810236fd0
