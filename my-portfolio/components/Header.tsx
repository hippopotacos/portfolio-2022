import Logo from "./Logo";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  useEffect(()=>{
    setDrawer(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <a href="/">
            <Logo />
          </a>
          <button type="button" className={styles.header__button} onClick={ () => {setDrawer(!drawer)} }>{drawer ? 'CLOSE' : 'MENU'}</button>
          <nav className={`${styles.header__nav} ${drawer ? styles.active : ''}`}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <Link href="/#works">Works</Link>
              </li>
              <li className={styles.header__item}>
                <Link href="/#profile">Profile</Link>
              </li>
              <li className={styles.header__item}>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}