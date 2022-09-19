import { useEffect, useState } from "react";
import { notasPrincipales } from "../../../data/notasPrincipales";
import { TarjetaNotaCuadradaConFoto } from "../../Tarjetas/TarjetaNotaCuadradaConFoto/TarjetaNotaCuadradaConFoto";
import { TarjetaNotaPrincipal } from "../../Tarjetas/TarjetaNotaPrincipal/TarjetaNotaPrincipal";
import styles from "./notasPrincipales.module.css";

export const NotasPrincipales = () => {
  const [dataNotasPrincipales, setDataNotasPrincipales] = useState([]);

  const getNotas = async () => {
    const dataNota = await fetch(
      "https://admin.prensaobrera.com/wp-json/wp/v2/posts?&per_page=3&_embed"
    );
    const notas = await dataNota.json();
    setDataNotasPrincipales(notas);
  };

  useEffect(() => {
    getNotas();
  }, []);

  return (
    <section className={styles.notasPrincipales}>
      {dataNotasPrincipales.length === 0 ? (
        "Cargando..."
      ) : (
        <>
          <TarjetaNotaPrincipal
            titulo={dataNotasPrincipales[0].title.rendered}
            imagen={
              dataNotasPrincipales[0]._embedded["wp:featuredmedia"][0]
                .source_url
            }
          />
          <TarjetaNotaCuadradaConFoto
            titulo={dataNotasPrincipales[1].title.rendered}
            imagen={
              dataNotasPrincipales[1]._embedded["wp:featuredmedia"][0]
                .source_url
            }
          />
          <TarjetaNotaCuadradaConFoto
            titulo={dataNotasPrincipales[2].title.rendered}
            imagen={
              dataNotasPrincipales[2]._embedded["wp:featuredmedia"][0]
                .source_url
            }
          />
        </>
      )}
    </section>
  );
};
