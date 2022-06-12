import styles from "../styles/Footer.module.scss"

interface Props {
  playlist?: boolean
}

export default function Footer(props: Props) {
  return (
    <>
      <footer className={styles.footer}>
        {props.playlist &&
          <div className={styles.footer__embed}><iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/1UX7k6NBXA5ZkenPZybibY?utm_source=generator&theme=0" width="100%" height={80} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" /></div>
        }
        <p className={styles.footer__text}>
          <small className={styles.footer__copyright}>©︎ 2022 Kazunori Matsunaga</small>
        </p>
      </footer>
    </>
  )
}