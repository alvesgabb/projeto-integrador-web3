import { useState } from "react";
import "./App.css";
import ReceitaForm from "./components/ReceitaForm.jsx"; 
import ReceitaLista from "./components/ReceitaLista.jsx"; 

function App() {
  const [receitas, setReceitas] = useState([
    { 
      id: "1", 
      nome: "Bolo de Chocolate", 
      ingredientes: "Trigo, cacau, ovos", 
      modo_preparo: "Misture e asse por 40min." 
    },
    { 
      id: "2", 
      nome: "Salada de Frutas", 
      ingredientes: "Banana, maçã, uva", 
      modo_preparo: "Pique e misture com leite condesado." 
    },
  ]);

  
  function gerarId() {
    return typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now() + Math.random());
  }

  // Função da Clarisse
  function adicionarReceita({ nome, ingredientes, modo_preparo }) {
    const nova = { 
      id: gerarId(), 
      nome, 
      ingredientes, 
      modo_preparo 
    };
    setReceitas((lista) => [...lista, nova]);
  }

  // Minha função (Gabi)
  function excluirReceita(id) {
    setReceitas((lista) => lista.filter((r) => r.id !== id));
  }

  return (
    <main className="container">
      <h1>Catálogo de Receitas</h1>

      <ReceitaForm onAdicionar={adicionarReceita}/>

      <hr />

      {/* O Vianei recebe a lista e repassa a função de excluir para o Card*/}
      <ReceitaLista receitas={receitas} onExcluir={excluirReceita}/>
    </main>
  );
}  

export default App;