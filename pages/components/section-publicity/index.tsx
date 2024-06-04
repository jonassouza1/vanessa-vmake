import styles from "styles/sections/SectionPublicity.module.css";

const SectionPublicity = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divTitle}>
        <h1 className={styles.h1}>REVELAMOS</h1>
        <h2>SUA VERDADEIRA CONFIANÇA COM O</h2>
        <h3 className={styles.h1}>DESIGN</h3>
        <h2>PERFEITO DAS SUAS SOBRANCELHAS.</h2>
      </div>

      <div className={styles.divImg}>
        <img src="./olhos.jpg" alt="vanessa" />
      </div>
    </section>
  );
};

export default SectionPublicity;
