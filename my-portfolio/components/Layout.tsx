import styles from '../styles/Layout.module.scss'

interface Props {
  children: React.ReactNode
  works?: boolean
}

export default function Layout( {children, works}: Props ) {
  return (
    <>
      <div className={`${styles.wrapper} ${works && styles.post}`}>
        {children}
      </div>
    </>
  )
}