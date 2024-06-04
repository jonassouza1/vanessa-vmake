import styles from "styles/sections/SectionAbout.module.css";

const SectionAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divTitle}>
        <h1 className={styles.animatedheader}>
          <span>Q</span>
          <span>U</span>
          <span>E</span>
          <span>M</span> É VANESSA BRAUM
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vero
          nemo excepturi ipsum animi, ex illum similique, iste molestias saepe
          nisi omnis eveniet quibusdam. Eos architecto aut in vitae totam!
        </p>
      </div>

      <div className={styles.divImg}>
        <img src="./vanessa.png" alt="vanessa" />
      </div>
    </section>
  );
};

export default SectionAbout;
