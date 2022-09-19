import styles from "./tarjetaNotaCuadradaConFoto.module.css";

export const TarjetaNotaCuadradaConFoto = ({
  volanta,
  titulo,
  imagen,
  descripcionDestacada,
  link,
}) => {
  return (
    <>
      <article className={styles.tarjetaNotaCuadradaConFoto}>
        {volanta?.length > 0 && (
          <div className={styles.volanta}>
            <span>{volanta}</span>
          </div>
        )}

        <div className={styles.contenedorImagen}>
          <picture className={styles.fotoNotaCuadradaConFoto}>
            <img
              src={
                imagen && imagen.length > 0
                  ? imagen
                  : "https://via.placeholder.com/400"
              }
            />
          </picture>
        </div>
        <div className={styles.data}>
          <a href={link}>
            <h3>{titulo}</h3>
          </a>
          <p>{descripcionDestacada}</p>
        </div>
      </article>
    </>
  );
};
