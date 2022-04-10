import Logo from "./Logo";
import styles from "../styles/Header.module.scss";
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