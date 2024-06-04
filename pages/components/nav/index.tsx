import styles from "styles/nav/Nav.module.css";
import NavResponsive from "./nav-responsive";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <a href="#SectionServices">Serviços</a>
          <a href="#SectionDepoiments">Depoimentos</a>
          <a href="#footer">Contato</a>
        </li>
      </ul>
      <NavResponsive />
    </nav>
  );
};
export default Nav;
