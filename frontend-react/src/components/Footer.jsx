import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} Sistema de Receitas — Organizando suas melhores memórias culinárias.</p>
        <p className={styles.muted}>Projeto Integrador — IFCE Maranguape</p>
      </div>
    </footer>
  );
}