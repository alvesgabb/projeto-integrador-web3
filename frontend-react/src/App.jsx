import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

// Rotas protegidas
import PrivateRoute from "./auth/PrivateRoute";

// Páginas principais
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Rotas de Receitas 
import ReceitasLayout from "./pages/receitas/ReceitasLayout";
import ReceitaLista from "./pages/receitas/ReceitaLista";
// import ReceitaDetalhes from "./pages/receitas/ReceitaDetalhes";
import ReceitaForm from "./pages/receitas/ReceitaForm";

export default function App() {
  
  return (
    <>
      <Navbar />
      
      <main className="container">
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />

          {/* Rota /receitas com rotas aninhadas */}
          <Route path="/receitas" element={<ReceitasLayout />}>
            <Route 
            index 
            element={<ReceitaLista receitas={receitas} />} />
            <Route 
            path="novo"
            element={<ReceitaForm onAdicionar={adicionarReceita} />} />
          </Route>

          {/* Rota protegida*/}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}