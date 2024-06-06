import styles from "styles/sections/SectionListServices.module.css";

const SectionListServices = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divUl}>
        <div className={styles.divUl1}>
          <ul>
            {" "}
            <li>
              <a href="##">Brown Lamination</a>
            </li>
            <li>
              <a href="##">Design Com Henna</a>
            </li>
            <li>
              <a href="##">Design de Sobrancelhas</a>
            </li>
          </ul>

          <ul>
            {" "}
            <li>
              <a href="##">Lash Lifiting</a>
            </li>
            <li>
              <a href="##">Cílios Fio a Fio</a>
            </li>
            <li>
              <a href="##">Volume Brasileiro</a>
            </li>
          </ul>
        </div>

        <div className={styles.divUl1}>
          <ul>
            <li>
              <a href="##">Volume Russo</a>
            </li>
            <li>
              <a href="##">Volume Híbrido</a>
            </li>
            <li>
              <a href="##">Volume Egípcio</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="##">Maquiagem</a>
            </li>
            <li>
              <a href="##">Tranças Nagô</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionListServices;
