import styles from "../styles/Main.module.scss"

export default function Main({children}) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container__inner}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}