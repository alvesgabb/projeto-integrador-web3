import { Link } from "react-router-dom";
import styles from "./cardReceita.module.css";

function CardReceita({ receita, onExcluir, onEditar}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{receita.nome}</h3>

      <img src={receita.imagem} alt={receita.nome} className={styles.imagem} />

      <div className={styles.botoes}>
        {/* Navega para a rota de detalhes */}
        <Link to={`/receitas/${receita.id}`} className={styles.btnDetalhes}>
          Ver Detalhes
        </Link>

        {/* Aciona a função handleExcluir que o Vianney passou */}
        <button
          className={styles.btnExcluir}
          onClick={() => onExcluir(receita.id)}
        >
          Excluir
        </button>

        <button
          className={styles.btnEditar}
          onClick={() => onEditar(receita)}
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}

export default CardReceita;
