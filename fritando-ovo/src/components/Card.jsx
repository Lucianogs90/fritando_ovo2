import styles from "./Card.module.css";

export default function Card({ titulo, tempoPreparo, rendimento, imagem, descricao }) {
  return (
    <div className={styles.card}>

      <img src={imagem} alt={descricao} />
      
      <div className={styles.card__title}>
        <h2>{titulo}</h2>
      </div>

      <div className={styles.card__body}>
      
        <div className={styles.card__body__preparo}>
          <img src="/images/relogio.svg" alt="Ícone de um relógio" />
          <p>{tempoPreparo} minuto(s)</p>
        </div>

        <div className={styles.card__body__rendimento}>
          <img src="/images/hot-meal.svg" alt="Ícone de comida quentinha" />
          <p>{rendimento} porções</p>
        </div>

      </div>

    </div>
  );
}
