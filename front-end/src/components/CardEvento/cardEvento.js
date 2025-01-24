import styles from './cardEvento.module.css';

export default function CardEvento({ evento }) {
  return (
    <div className={styles.cardEvento}>
      <h3>{evento.titulo}</h3>
      <p>{evento.descripcion}</p>
      <p>{evento.endereco}</p>
      <p>{evento.abre}</p>
      <p>{evento.fecha}</p>
    </div>
  );
}