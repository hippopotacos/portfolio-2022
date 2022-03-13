import Logo from "./logo";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <Logo />
        </a>
      </header>
    </>
  );
}