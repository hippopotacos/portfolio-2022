import styles from '../styles/Content.module.scss'

interface Props {
  children: React.ReactNode
}

export default function Content( {children}: Props ) {
  return (
    <>
      <div className={styles.wrapper}>
        {children}
      </div>
    </>
  )
}