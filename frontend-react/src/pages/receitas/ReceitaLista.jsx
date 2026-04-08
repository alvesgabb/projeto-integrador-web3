import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api.js";
import CardReceita from "../../components/CardReceita"; // Importa o componente da Clarisse

export default function ProdutosList() {
  const [produtos, setProdutos] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetchProducts().then(setProdutos).catch(setErro);
  }, []);

  // Lógica de excluir
  const handleExcluir = (id) => {
    if (window.confirm("Deseja apagar essa receita ? ")) {
      // Filtra a lista para o card sumir da tela
      const novaLista = produtos.filter((p) => p.id !== id);
      setProdutos(novaLista);
    }
  };

  if (erro) return <p className="card">Erro ao carregar produtos.</p>;
  if (!produtos) return <p className="card">Carregando as receitas... </p>;

  return (
<<<<<<< HEAD
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        padding: "1rem",
      }}
    >
      {produtos.map((p) => (
        /* Chamamos o Card da Clarisse e passamos os dados e a função */
        <CardReceita key={p.id} receita={p} onExcluir={handleExcluir} />
=======
    <div className="grid">
      {receitas.map((receita) => (
        <CardReceita
          key={receita.id} 
          receita={receita}
          onExcluir={onExcluir}
          />
>>>>>>> f8eb31230c99ca09998edc075508b65c9bc9470e
      ))}
    </div>
  );
}
