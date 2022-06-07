import styles from '../styles/Content.module.scss'

export default function Content({children}){
  return (
    <>
      <div className={styles.wrapper}>
        {children}
      </div>
    </>
  );
}