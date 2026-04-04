import { NavLink, Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../auth/AuthProvider";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        {/* Marca / Logo adaptada */}
        <Link to="/" className={styles.brand}>
          Logo 
        </Link>

        {/* Links de navegação*/}
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

        {/* Área do usuário*/}
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