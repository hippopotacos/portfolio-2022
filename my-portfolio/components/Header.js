import Logo from "./Logo.js";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>
      </header>
    </>
  );
}