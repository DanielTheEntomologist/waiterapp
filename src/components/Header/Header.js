import styles from "./Header.module.scss";

const Header = ({ children }) => (
  <header>
    <h1 className={styles.title}>{children}</h1>
  </header>
);

export default Header;
