import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/frigideira.svg" alt="Imagem de uma frigideira" />
      <h1>
        Fritando ovo
        <br />
        Receitas fáceis
      </h1>
    </header>
  );
}
