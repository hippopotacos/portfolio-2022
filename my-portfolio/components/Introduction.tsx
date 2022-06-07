import styles from "../styles/Introduction.module.scss";
import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className={styles.introduction}>
        <div className={styles.introduction__group}>
          <figure className={styles.introduction__figure}>
            <Image className={styles.introduction__image} src="/images/portrait.jpeg" alt="Kazunori MATSUNAGA" width={640} height={818} />
            <figcaption className={styles.introduction__caption}>
              <a className={styles.introduction__comment} href="https://goo.gl/maps/Rfb5FRKv5XGdDosNA" target="_blank" rel="noopener noreferrer">@colombo cornershop</a>
              <p className={styles.introduction__date}>2022.04.29</p>
            </figcaption>
          </figure>
        </div>
        <p className={styles.introduction__text}>フロントエンドディベロッパー。<b>レスポンシブWebコーディング・CMS利用のWeb制作が経験豊富で、大規模サイトの制作・運用実績もある。</b>興味のある領域は、ユーザーインターフェース・Webアクセシビリティ。<a href="#education">工学・芸術の学士</a>。多趣味で、いちばんの趣味は音楽（鑑賞・演奏・制作）。</p>
      </div>
      {/* Profile end */}
    </>
  );
}