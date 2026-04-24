import { useEffect, useState } from "react";
import { fetchReceita, deleteReceita } from "../../services/api";
import CardReceita from "../../components/CardReceita";
import styles from "./ReceitaLista.module.css";

function ReceitaLista() {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    async function carregarReceitas() {
      try {
        const dados = await fetchReceita();
        setReceitas(dados);
      } catch (err) {
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
    } catch (err) {
      setErro("Erro ao excluir receita.");
    }
  }

  if (carregando) return <p className={styles.aviso}>Carregando receitas...</p>;
  if (erro) return <p className={styles.erro}>{erro}</p>;

  return (
    <div className={styles.container}>
      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

      {receitas.length === 0 ? (
        <p>Nenhuma receita cadastrada.</p>
      ) : (
        <div className={styles.grid}>
          {receitas.map((receita) => (
            <CardReceita
              key={receita.id}
              receita={receita}
              onExcluir={handleExcluir}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReceitaLista;
