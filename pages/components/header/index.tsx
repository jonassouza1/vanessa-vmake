import styles from "styles/header/Header.module.css";
import Nav from "../nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.divImg}>
        <img
          src="https://img.freepik.com/fotos-gratis/modelo-editavel-psd-com-efeito-de-texto-em-relevo-na-textura-do-papel-verso_53876-128726.jpg"
          alt="logo marca"
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
