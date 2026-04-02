import CardReceita from "./CardReceita";

function ReceitaLista({ receitas, onExcluir }) {

  if (!receitas.length) {
    return <p className="vazio">Nenhuma receita cadastrada ainda.</p>;
  }

  return (
    <ul className="lista">
      {receitas.map((r) => (
        <li key={r.id} className="item">
          <CardReceita 
            receita={r}
            onExcluir={onExcluir}
          />
        </li>
      ))}
    </ul>
  );
}

export default ReceitaLista;