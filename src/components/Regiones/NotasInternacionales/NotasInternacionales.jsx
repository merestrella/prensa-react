import React from "react";
import { TarjetaNotaCuadradaConFoto } from "../../Tarjetas/TarjetaNotaCuadradaConFoto/TarjetaNotaCuadradaConFoto";
import { notasGenerales } from "../../../data/notasGenerales";
import styles from "./notasInternacionales.module.css";

export const NotasInternacionales = () => {
  console.log(notasGenerales);
  return (
    <>
      <section className={styles.notasInternacionales}>
        {notasGenerales.map(({ title, _embedded }) => (
          <TarjetaNotaCuadradaConFoto
            volanta={_embedded["wp:term"][0][0].name}
            titulo={title.rendered}
            imagen={_embedded["wp:featuredmedia"][0].source_url}
          />
        ))}
      </section>
    </>
  );
};
