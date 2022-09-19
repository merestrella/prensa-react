import React from "react";
import { notasSubdestacadas } from "../../../data/notasSubdestacadas";
import { TarjetaNotaSinFoto } from "../../Tarjetas/TarjetaNotasSinFoto/TarjetaNotaSinFoto";
import styles from "./notasSinFoto.module.css";

export const NotasSinFoto = () => {
  return (
    <>
      <section className={styles.notasSinFoto}>
        <TarjetaNotaSinFoto
          titulo={notasSubdestacadas[0].titulo}
          descripcionDestacada={notasSubdestacadas[0].descripcionDestacada}
        />
        <TarjetaNotaSinFoto titulo={notasSubdestacadas[1].titulo} />
        <TarjetaNotaSinFoto
          titulo={notasSubdestacadas[2].titulo}
          descripcionDestacada={notasSubdestacadas[2].descripcionDestacada}
        />
        <TarjetaNotaSinFoto
          titulo={notasSubdestacadas[0].titulo}
          descripcionDestacada={notasSubdestacadas[0].descripcionDestacada}
        />
      </section>
    </>
  );
};
