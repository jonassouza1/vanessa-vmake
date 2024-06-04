import styles from "styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <ul className={styles.ul}>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/vanessabraaun_vmake/"
            target="_blank"
          >
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "#de0d45" }}
            ></i>
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=555197248556&text=Olá%20Gostaria%20de%20mais%20informações"
            target="_blank"
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{ color: "#63E6BE" }}
            ></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
