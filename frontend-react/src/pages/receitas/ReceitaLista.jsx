// esqueleto pronto com o parâmetro receitas = [] para as rotas não quebrarem e a navbar aparecer, po enquanto que não tem a lógica  "

//import { useEffect, useState } from "react";
//import { fetchProducts } from "../../services/api.js"
import { Link } from "react-router-dom"
import CardReceita from "../../components/CardReceita";

function ReceitaLista({ receitas = [], onExcluir }) {

  if (receitas.length===0) {
    return <p className="vazio">Nenhuma receita cadastrada ainda.</p>;
  }

  return (
    <div className="grid">
      {receitas.map((receita) => (
        <CardReceita
          key={receita.id} 
          receita={receita}
          onExcluir={onExcluir}
          />
      ))}
    </div>
  );
}

export default ReceitaLista;