import styles from "styles/sections/SectionAbout.module.css";

const SectionAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divTitle}>
        <h1 className={styles.animatedheader}>
          <span>Q</span>
          <span>U</span>
          <span>E</span>
          <span>M</span> É
        </h1>
        <h3> VANESSA BRAUN</h3>
        <p>
          Há cinco anos, embarquei na jornada da beleza. comecei com um curso de
          maquiagem e design de sobrancelhas no renomado instituto mix,
          concluído em 2021. desde então, tenho me dedicado a aprimorar minhas
          habilidades e oferecer serviços de alta qualidade. com uma
          sensibilidade estética apurada e um compromisso com a excelência,
          participo de cursos e workshops para estar sempre atualizada com as
          últimas tendências. cada atendimento é realizado com profissionalismo
          e atenção aos detalhes, garantindo resultados que encantam e superam
          as expectativas.
        </p>
      </div>

      <div className={styles.divImg}>
        <img src="./vanessa.png" alt="vanessa" />
      </div>
    </section>
  );
};

export default SectionAbout;
