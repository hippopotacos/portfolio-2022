import { useEffect, useState } from "react"
import Link from "next/link"

import Logo from "./Logo"
import styles from "../styles/Header.module.scss"

export default function Header() {
  const [drawer, setDrawer] = useState(false)

  useEffect(()=>{
    setDrawer(false)
  }, [])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
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
  )
}