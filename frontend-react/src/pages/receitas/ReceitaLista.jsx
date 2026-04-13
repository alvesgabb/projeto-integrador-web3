import { useEffect, useState } from "react";
import { fetchReceitas, deleteReceita } from "../../services/api";
import styles from "./ReceitaLista.module.css";

function ReceitaLista() {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function carregarReceitas() {
      try {
        const dados = await fetchReceitas();
        setReceitas(dados);
      } catch (err) {
        console.error(err);
        setErro("Erro ao carregar receitas.");
      } finally {
        setCarregando(false);
      }
    }
    carregarReceitas();
  }, []);

  async function handleExcluir(id) {
    if (!window.confirm("Tem certeza que deseja excluir esta receita?")) return;

    try {
      await deleteReceita(id);
      setReceitas((prev) => prev.filter((r) => r.id !== id));
      setMensagem("✅ Receita excluída com sucesso!");
      setErro("");
    } catch (err) {
      console.error(err);
      setErro("Erro ao excluir receita.");
      setMensagem("");
    }
  }

  if (carregando) return <p>Carregando receitas...</p>;
  if (erro) return <p style={{ color: "red" }}>{erro}</p>;

  return (
    <div>
      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

      {receitas.length === 0 ? (
        <p>Nenhuma receita cadastrada.</p>
      ) : (
        <ul className={styles.listaReceitas}>
          {receitas.map((receita) => (
            <li key={receita.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{receita.nome}</h3>
                <button
                  onClick={() => handleExcluir(receita.id)}
                  className={styles.btnExcluir}
                  title="Excluir receita"
                >
                  ✖
                </button>
              </div>

              {receita.imagem && (
                <img
                  src={receita.imagem}
                  alt={receita.nome}
                  className={styles.imagem}
                />
              )}

              <p>
                <strong>Ingredientes:</strong>
              </p>
              <p className={styles.texto}>{receita.ingredientes}</p>

              <p>
                <strong>Modo de Preparo:</strong>
              </p>
              <p className={styles.texto}>{receita.modo_de_preparo}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReceitaLista;
