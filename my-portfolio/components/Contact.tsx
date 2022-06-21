import Image from "next/image"

import styles from "../styles/Contact.module.scss"
import Button from "./Button"

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.contact__text}>SNS</div>
        <ul className={styles.sns}>
          <li className={styles.sns__item}>
            <a className={styles.sns__link} href="https://m.me/kazunori.matsunaga.90/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo_messenger.svg" alt="Facebook Messengerのロゴ" width={40} height={40} />
            </a>
          </li>
          <li className={styles.sns__item}>
            <a className={styles.sns__link} href="https://www.wantedly.com/id/kazunori_matsunaga_c" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo_wantedly.png" alt="Wantedlyのロゴ" width={48} height={38} />
            </a>
          </li>
          <li className={styles.sns__item}>
            <a className={styles.sns__link} href="https://www.instagram.com/3tbell/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo_instagram.png" alt="Instagramのロゴ" width={32} height={32} />
            </a>
          </li>
        </ul>
        <div className={styles.contact__text}>もしくは</div>
        <Button href="mailto:matsunagak333@gmail.com">
          メールで問い合わせる
        </Button>
      </div>
    </>
  )
}