import React from "react";
import styles from "styles/nav/NavResponsivo.module.css";

const NavResponsive = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputHamburger}
        type="checkbox"
        id="menu-hamburger"
      />

      <label className={styles.labelHamburger} htmlFor="menu-hamburger">
        <div className={styles.menu}>
          <span className={styles.hamburger}></span>
        </div>
      </label>

      <ul className={styles.ul2}>
        <li>
          <a href="#SectionServices">Serviços</a>
          <a href="#SectionDepoiments">Depoimentos</a>
          <a href="#footer">Contato</a>
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
