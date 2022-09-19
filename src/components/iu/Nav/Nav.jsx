import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.containerNav}>
      <nav className={styles.navMenu}>
        <ul className={styles.listaMenu}>
          <li>
            <a href="http://google.com">Últimas noticias</a>
          </li>
          <li>
            <a href="http://google.com">Ajuste en discapacidad</a>
          </li>
          <li>
            <a href="http://google.com">Congreso UJS</a>
          </li>
        </ul>
        <input></input>
      </nav>
    </div>
  );
};
