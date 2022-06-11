import styles from "../styles/Main.module.scss"

interface Props {
  children: React.ReactNode
}

export default function Main({children}: Props) {
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
  )
}