import { NavLink, Outlet } from "react-router-dom";

export default function ReceitasLayout() {
  const getClass = ({ isActive }) =>
    isActive ? "btn" : "btn btn-outline";

  return (
    <section className="card" style={{ padding: "1.5rem" }}>
      <h1>Receitas Layout</h1>
      <p style={{ color: "var(--text-muted)", marginTop: ".5rem" }}>
        Explore suas receitas ou registre novas criações culinárias.
      </p>

      <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem" }}>
        <NavLink to="" end className={getClass}>Todas as Receitas</NavLink>
        <NavLink to="novo" className={getClass}>Cadastrar Receita</NavLink>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Outlet />
      </div>
    </section>
  );
}