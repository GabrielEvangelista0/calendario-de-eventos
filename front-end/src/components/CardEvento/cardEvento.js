import styles from './cardEvento.module.css';

export default function CardEvento({ titulo, descricao, endereco, inicia, termina, das, ate }) {
  return (
    <div className={styles.cardEvento}>
      <h3>{titulo}</h3>
      <div className={styles.cerdEvento_informaçoes}>
        <p>Inicia: {inicia}</p>
        <p>Termina: {termina}</p>
        <p>Das: {das}</p>
        <p>Ate: {ate}</p>
      </div>
    </div>
  );
}