// src/controllers/receitas.controller.js

import { receitas } from "../data/receitas.js";

// Importações diretas dos arquivos separados
import { criarReceitaCore } from "../core/criarReceitaCore.js";
import { buscarReceitaCore } from "../core/buscarReceitaCore.js";
import { atualizarReceitaCore } from "../core/atualizarReceitaCore.js";
import { deletarReceitaCore } from "../core/deletarReceitaCore.js";

let contadorId = receitas.length + 1;

// Criar receita
export function criarReceita(req, res) {
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
export function buscarReceitaCore(req,res) {
  try{
    const id = Number (req.params.id)

    const receita = buscarReceitaCore(receitas,id);

    res.json(receita);

  } catch (erro) {
    res.status(404).json({erro: erro.message})
  }
}

// Atualizar receita
export function atualizarReceita(req, res) {
  try {
    const id = Number(req.params.id);

    const receitaAtualizada = atualizarReceitaCore(receitas, id, req.body);

    res.json(receitaAtualizada);

  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
}

// Deletar receita
export function deletarReceita(req, res) {
  try {
    const id = Number(req.params.id);

    deletarReceitaCore(receitas, id);

    res.status(204).send();

  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
}