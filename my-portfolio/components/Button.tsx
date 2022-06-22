import styles from "../styles/Button.module.scss"

interface Props {
  children: React.ReactNode
  href: string
}

export const Button = ({children, href}: Props) => {
  return (
    <>
      <div className={styles.button}>
        <a className={styles.button__body} href={href}>
          {children}
        </a>
      </div>
    </>
  )
}
