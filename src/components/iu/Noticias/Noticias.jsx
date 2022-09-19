import { useState } from "react";
import { Banner } from "../../elements/Banners/Banner";
import { NotasInternacionales } from "../../Regiones/NotasInternacionales/NotasInternacionales";
import { NotasPrincipales } from "../../Regiones/NotasPrincipales/NotasPrincipales";
import { NotasSinFoto } from "../../Regiones/NotasSinFoto/NotasSinFoto";
import { NotasSubDestacadas } from "../../Regiones/NotasSubDestacadas/NotasSubDestacadas";
import styles from "./noticias.module.css";

export const Noticias = () => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const orMostrarMas = () => {
    setShow(!show);
  };

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <main className={styles.container}>
      <input onChange={(e) => onChangeInput(e)} type="text" />
      <h1>{inputValue}</h1>
      <NotasPrincipales />
      <NotasSubDestacadas />

      <button className={styles.boton} onClick={orMostrarMas}>
        {show ? "Mostrar menos" : "Mostrar más"}
      </button>
      {show && (
        <>
          <Banner />
          <NotasSinFoto />
        </>
      )}
    </main>
  );
};
