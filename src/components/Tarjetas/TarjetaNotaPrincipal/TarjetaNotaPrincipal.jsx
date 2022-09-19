import { useState } from "react";
import styles from "./tarjetaNotaPrincipal.module.css";

export const TarjetaNotaPrincipal = ({
  titulo,
  imagen,
  descripcionDestacada,
}) => {
  const [show, setShow] = useState(true);
  const onX = () => {
    setShow(!show);
  };

  return (
    <>
      <article className={styles.tarjetaNotaPrincipal}>
        <div className={styles.volanta}>
          <span>Volanta</span>
        </div>
        <button className={styles.botonBorrar} onClick={onX}>
          X
        </button>
        <picture className={styles.fotoNotaPrincipal}>
          {show ? (
            <img
              src={
                imagen && imagen.length > 0
                  ? imagen
                  : "https://via.placeholder.com/400"
              }
            />
          ) : null}
        </picture>
        <div className={styles.data}>
          <h3>{titulo}</h3>
          <p>{descripcionDestacada}</p>
        </div>
      </article>
    </>
  );
};
