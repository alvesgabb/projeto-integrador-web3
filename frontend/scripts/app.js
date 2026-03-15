//Faz import api.js e ui.js
//Tratamento de erro com try e catch

import * as api from './api.js';
import { renderizarReceita } from './ui.js';

async function listaReceitas() {
  try {
    const receitas = await api.getAllReceitas();
    renderizarReceita(receitas);
  } catch (erro) {
    console.error('Erro ao carregar receitas:', erro);
  }
}

listaReceitas();
