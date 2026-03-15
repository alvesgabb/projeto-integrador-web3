//Faz import api.js e ui.js
//Tratamento de erro com try e catch

import * as api from './api.js';
import { renderizarReceita } from './ui.js';

async function listarReceitas() {
  try {
    const receitas = await api.getReceitas();
    renderizarReceita(receitas);
  } catch (erro) {
    console.error('Erro ao carregar receitas:', erro);
  }
}

async function criarReceita(evento) {
  //bloqueia esse recarregamento automático
  evento.preventDefault(); 

  // Inicializei as variaveis pelo id
  const nome = document.getElementById('nome').value.trim();
  const ingredientes = document.getElementById('ingredientes').value.trim();
  const modo_preparo = document.getElementById('modo_preparo').value.trim();

// Validando se as variaveis estão nulas
  if (!nome || !ingredientes || !modo_preparo) return;

// Chamando api e passando as variaveis na função criar receita.
  try {
    await api.criarReceita({ nome, ingredientes, modo_preparo  });
    await listarReceitas(); // atualiza lista
    evento.target.reset();
  } catch (erro) {
    console.error('Erro ao criar receitas:', erro);
  }
}


// Submetendo o form e acionando a função criarReceita 
document
  .getElementById('form-receita')
  .addEventListener('submit', criarReceita);


renderizarReceita();
