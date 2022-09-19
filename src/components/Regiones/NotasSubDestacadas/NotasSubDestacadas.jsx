import { useEffect, useState } from "react";
import { TarjetaNotaCuadradaConFoto } from "../../Tarjetas/TarjetaNotaCuadradaConFoto/TarjetaNotaCuadradaConFoto";
import styles from "./notasSubDestacadas.module.css";

export const NotasSubDestacadas = () => {
  const [dataNotasSubdestacadas, setNotasSubdestacadas] = useState([]);

  const getNotas = async () => {
    const dataNotas = await fetch(
      "https://admin.prensaobrera.com/wp-json/wp/v2/posts?regiones=96739&_embed"
    );
    const notas = await dataNotas.json();
    setNotasSubdestacadas(notas);
    console.log(dataNotasSubdestacadas);
  };

  useEffect(() => {
    getNotas();
  }, []);

  return (
    <>
      <section className={styles.notasSubDestacadas}>
        {dataNotasSubdestacadas.map(({ title, _embedded, acf, id, link }) => (
          <TarjetaNotaCuadradaConFoto
            key={id}
            titulo={title.rendered}
            volanta={acf["volanta"]}
            descripcionDestacada={acf["descripcion-destacado"]}
            imagen={_embedded["wp:featuredmedia"][0].source_url}
            link={link}
          />
        ))}
      </section>
    </>
  );
};
