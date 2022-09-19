import styles from "./tarjetaNotaSinFoto.module.css";

export const TarjetaNotaSinFoto = ({ titulo, descripcionDestacada }) => {
  return (
    <>
      <article className={styles.tarjetaNotaSinFoto}>
        <div>
          <h3 className={styles.titulo}>{titulo}</h3>
          <p className={styles.data}>{descripcionDestacada}</p>
        </div>
      </article>
    </>
  );
};
