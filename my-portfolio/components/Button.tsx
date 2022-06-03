import styles from "../styles/Button.module.scss"

export default function Button({children, href}) {
  return (
    <>
      <div className={styles.button}>
        <a className={styles.button__body} href={href}>
          {children}
        </a>
      </div>
    </>
  );
}