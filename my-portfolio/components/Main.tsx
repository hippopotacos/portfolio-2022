import styles from "../styles/Main.module.scss"

interface Props {
  children: React.ReactNode
}

export const Main = ({children}: Props) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.main__container}>
          {children}
        </div>
      </main>
    </>
  )
}