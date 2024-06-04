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
        <h3> VANESSA BRAUM</h3>

        <p>
          HÁ CINCO ANOS, EMBARQUEI NA JORNADA DA BELEZA. COMECEI COM UM CURSO DE
          MAQUIAGEM E DESIGN DE SOBRANCELHAS NO RENOMADO INSTITUTO MIX,
          CONCLUÍDO EM 2021. DESDE ENTÃO, TENHO ME DEDICADO A APRIMORAR MINHAS
          HABILIDADES E OFERECER SERVIÇOS DE ALTA QUALIDADE. COM UMA
          SENSIBILIDADE ESTÉTICA APURADA E UM COMPROMISSO COM A EXCELÊNCIA,
          PARTICIPO DE CURSOS E WORKSHOPS PARA ESTAR SEMPRE ATUALIZADA COM AS
          ÚLTIMAS TENDÊNCIAS. CADA ATENDIMENTO É REALIZADO COM PROFISSIONALISMO
          E ATENÇÃO AOS DETALHES, GARANTINDO RESULTADOS QUE ENCANTAM E SUPERAM
          AS EXPECTATIVAS.
        </p>
      </div>

      <div className={styles.divImg}>
        <img src="./vanessa.png" alt="vanessa" />
      </div>
    </section>
  );
};

export default SectionAbout;
