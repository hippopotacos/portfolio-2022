import Image from "next/image"

import styles from "../styles/Introduction.module.scss"

export const Introduction = () => {
  return (
    <>
      <div className={styles.introduction}>
        <div className={styles.introduction__group}>
          <figure className={styles.introduction__figure}>
            <Image className={styles.introduction__image} src="/images/portrait.jpeg" alt="Kazunori MATSUNAGAのポートレート" width={640} height={818} />
            <figcaption className={styles.introduction__caption}>
              <a className={styles.introduction__comment} href="https://goo.gl/maps/Rfb5FRKv5XGdDosNA" target="_blank" rel="noopener noreferrer">@colombo cornershop</a>
              <p className={styles.introduction__date}>2022.04.29</p>
            </figcaption>
          </figure>
        </div>
        <p className={styles.introduction__text}>フロントエンドディベロッパー。<b>レスポンシブWebコーディングやCMS利用のWeb制作の経験が多め。中〜大規模サイトの制作や運用実績もあり。</b>興味のある領域は、ユーザーインターフェース、Webアクセシビリティ。<a href="#education">工学と芸術の学士</a>。趣味は音楽（鑑賞、演奏、制作）など。</p>
      </div>
      {/* Profile end */}
    </>
  )
}