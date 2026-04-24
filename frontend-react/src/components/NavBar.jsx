import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";


export default function Navbar() {
  const navigate = useNavigate();

  // Criamos essas duas variáveis aqui dentro para substituir o useAuth

  const isAuthenticated = true; 
  const logout = () => navigate("/login");

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
       
        <Link to="/" className={styles.brand}>
          Sistema de receitas 
        </Link>

        {/* Links de navegação */}

        <nav className={styles.links}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/receitas"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Receitas
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Sobre
          </NavLink>
        </nav>

        {/* Área do usuário */}
        <div className={styles.actions}>
          {isAuthenticated ? (
            <>
              <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>
                Minha Área
              </button>
              <button className="btn" onClick={logout}>
                Sair
              </button>
            </>
          ) : (
            <button className="btn" onClick={() => navigate("/login")}>
              Entrar
            </button>
          )}
        </div>
      </div>
    </header>
  );
}