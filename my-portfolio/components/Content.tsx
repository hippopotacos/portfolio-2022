import styles from '../styles/Content.module.scss'

export default function Contents({children}){
  return (
    <>
      <div className={styles.wrapper}>
        {children}
      </div>
    </>
  );
}