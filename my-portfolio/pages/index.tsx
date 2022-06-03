import styles from "../styles/Home.module.scss"
import Header from "../components/Header";
import Main from '../components/Main';
import Footer from "../components/Footer";
import Link from "next/link";
import Image from 'next/image';
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
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
          <p className={styles.introduction__text}>フロントエンドエンジニア。<b>レスポンシブWebコーディング・CMS利用のWeb制作が経験豊富で、大規模サイトの制作・運用実績もある。</b>興味のある領域は、ユーザーインターフェース・Webアクセシビリティ。<a href="#education">工学・芸術の学士</a>。多趣味で、いちばんの趣味は音楽（鑑賞・演奏・制作）。</p>
        </div>
        {/* Profile end */}
        <section id="works" className={styles.section}>
          <h1 className={styles.heading}>Works</h1>
          <div className={styles.section__inner}>
            <p className={styles.section}>※株式会社アンクシステムズでの制作実績は除く</p>
            <ul className={styles.items}>
              <li className={styles.item}>
                <a href="/project/beginner">
                  <div className={styles.item__inner}>
                    <p className={styles.item__thumbnail}>
                      <img className={styles.item__image} src="/images/ogimage.png" alt="thumbnail" />
                    </p>
                    <p className={styles.item__title}>このポートフォリオサイトについて</p>
                    <p className={styles.item__date}>2022.05</p>
                  </div>
                </a>
              </li>
              <li className={styles.item}>
                <a href="/project/beginner">
                  <div className={styles.item__inner}>
                    <p className={styles.item__thumbnail}>
                      <img className={styles.item__image} src="/images/ogimage-internet.png" alt="thumbnail" />
                    </p>
                    <p className={styles.item__title}>はじめてのインターネット</p>
                    <p className={styles.item__date}>2022.01</p>
                  </div>
                </a>
              </li>
              <li className={styles.item}>
                <a href="/internets/">
                  <div className={styles.item__inner}>
                    <p className={styles.item__thumbnail}>
                      <img className={styles.item__image} src="/images/ogimage-kentonakahara.png" alt="thumbnail" />
                    </p>
                    <p className={styles.item__title}>Kento Nakahara</p>
                    <p className={styles.item__date}>2021.06</p>
                  </div>
                </a>
              </li>
              <li className={styles.item}>
                <a href="/internets/">
                  <div className={styles.item__inner}>
                    <p className={styles.item__thumbnail}>
                      <img className={styles.item__image} src="/images/ogimage-desicco.png" alt="thumbnail" />
                    </p>
                    <p className={styles.item__title}>desicco</p>
                    <p className={styles.item__date}>2018.07</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* Works end */}
        <section id="profile" className={styles.section}>
          <h1 className={styles.heading}>Profile</h1>
          <div className={styles.section__inner}>
            <div>
              <p>松永 知典 / Kazunori MATSUNAGA</p>
              <p>1993年生まれ。京都府在住、大分県出身。♨️</p>
            </div>
            <div>
              <div className={styles.group}>
                <h2 className={styles.subheading}>Type</h2>
                <div className={styles.group__inner}>
                  <a className={`${styles.group__name} ${styles.link__outward}`} href="https://www.16personalities.com/ja/infp%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC" target="_blank" rel="noopener noreferrer">仲介者</a>
                  <div className={styles.group__service}>16Personality</div>
                </div>
                <div className={styles.group__inner}>
                  <a className={`${styles.group__name} ${styles.link__outward}`} href="/document/theme-sequence-501-0-37583782-20210122174032871000000-UohG5I.pdf" target="_blank" rel="noopener noreferrer">学習欲・個別化・収集心・慎重さ・着想</a>
                  <div className={styles.group__service}>CliftonStrengths TOP 5</div>
                </div>
              </div>
              <div className={styles.group}>
                <h2 className={styles.subheading}>Can</h2>
                <div className={styles.unit}>
                  <ul className={styles.unit__list}>
                    <li className={styles.unit__item}>品質・コスト・納期を天秤にかけて解決策を練る</li>
                    <li className={styles.unit__item}>複数案件のスケジュール調整、優先順位づけ</li>
                    <li className={styles.unit__item}>社外・他職種とのコミュニケーション</li>
                    <li className={styles.unit__item}>Adobe Photoshop、Adobe Illustrator、Adobe XDをデザインカンプとしたWebページ制作</li>
                    <li className={styles.unit__item}>デザイナーが不在時でのビジュアルの提案</li>
                    <li className={styles.unit__item}>HTML、CSSによるコンテンツやビジュアルの構築</li>
                    <li className={styles.unit__item}>SASSなどのCSSプリプロセッサを用いた開発</li>
                    <li className={styles.unit__item}>BEMなどのCSS設計を用いた実装</li>
                    <li className={styles.unit__item}>JavaScript、CSSによるアニメーションの実装</li>
                    <li className={styles.unit__item}>スマートフォンやタブレットなどに対応したレスポンシブでの実装</li>
                    <li className={styles.unit__item}>JavaScript、Ajaxを用いた動的なウェブサイトの構築</li>
                    <li className={styles.unit__item}>npm、yarnなどのパッケージマネージャの使用</li>
                    <li className={styles.unit__item}>Webpack、Gulpなどを利用したフロントエンドの開発</li>
                    <li className={styles.unit__item}>Gitを用いたバージョン管理ツールでの業務</li>
                    <li className={styles.unit__item}>WordPress、MovableTypeなどのCMSを用いた実務経験</li>
                    <li className={styles.unit__item}>React、Next.jsを用いた開発</li>
                    <li className={styles.unit__item}>TypeScriptを用いた開発</li>
                    <li className={styles.unit__item}>Adobe Photoshop、Adobe Illustrator、Figmaを利用したビジュアル作成（実務経験なし）</li>
                  </ul>
                </div>
              </div>
              <div className={styles.group}>
                <h2 className={styles.subheading}>Will</h2>
                <div className={styles.unit}>
                  <ul className={styles.unit__list}>
                    <li className={styles.unit__item}>勉強への苦手意識を解いたり、学習が面白いと思ってもらえたりするような取り組み</li>
                    <li className={styles.unit__item}>アクセシビリティ向上、デザインシステム改善、持続可能性の高いUI制作など、プロダクトの改善</li>
                  </ul>
                </div>
              </div>
              <div className={styles.group}>
                <h2 className={styles.subheading}>Experience</h2>
                <table className={styles.group__list}>
                  <tbody>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2018.04 - 2022.05</td>
                      <td className={styles.group__description}>
                        <div className={styles.group__title}>
                          <span className={styles.group__type}>正社員</span>
                          <span className={`${styles.group__name} ${styles.link__outward}`}><a href="https://www.ankh-systems.co.jp/" target="_blank" rel="noopener noreferrer">株式会社アンクシステムズ</a></span>
                          <span className={styles.group__position}>フロントエンドディベロッパー</span>
                        </div>
                        <div className={styles.unit}>
                          <ul className={styles.unit__list}>
                            <li className={styles.unit__item}>クライアントや社内における約30のプロジェクトで、Web制作に従事</li>
                            <li className={styles.unit__item}>HTML、CSS、JavaScriptを基礎とし、SCSS、TypeScript、jQuery、React、Next.js、WordPressなど、さまざまな言語・ライブラリ・フレームワーク・コンテンツ管理システムを利用</li>
                            <li className={styles.unit__item}>クライアント含め、エンジニア、デザイナー、プロデューサーなど、さまざまな職種とチームで日常的にコミュニケーションをとる</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2013.09 - 2018.03</td>
                      <td className={styles.group__description}>
                        <div className={styles.group__title}>
                          <span className={styles.group__type}>アルバイト</span>
                          <span className={`${styles.group__name} ${styles.link__outward}`}><a href="https://www.goalfree.co.jp/" target="_blank" rel="noopener noreferrer">株式会社成基</a></span>
                          <span className={styles.group__position}>コーチ</span>
                        </div>
                        <div className={styles.unit}>
                          <ul className={styles.unit__list}>
                            <li className={styles.unit__item}>1対2の個別指導塾(個別教育ゴールフリー)で小中高生の英語・数学・理科を担当</li>
                            <li className={styles.unit__item}>傾聴・質問・承認のコーチングスキルを重要視する環境</li>
                            <li className={styles.unit__item}>教室内の成績向上を目指して、目標達成シート・質問シートなどを立案し、教室内で運用</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2017.08, 2017.11 - 2017.12</td>
                      <td className={styles.group__description}>
                        <div className={styles.group__title}>
                          <span className={styles.group__type}>インターン</span>
                          <span className={`${styles.group__name} ${styles.link__outward}`}><a href="https://dena.com/jp/" target="_blank" rel="noopener noreferrer">株式会社ディー・エヌ・エー</a></span>
                          <span className={styles.group__position}>UI/UXデザイナー</span>
                        </div>
                        <div className={styles.unit}>
                          <ul className={styles.unit__list}>
                            <li className={styles.unit__item}>UI/UXデザイナーの養成スクールに参加</li>
                            <li className={styles.unit__item}>デザイン基礎講義(レイアウト・ツール・配色・タイポグラフィ)の受講</li>
                            <li className={styles.unit__item}>Webサイト(イベント)のデザイン作成とフィードバック</li>
                            <li className={styles.unit__item}>iOSアプリ(美術館めぐりアプリ)のデザイン作成とフィードバック</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="education" className={styles.group}>
                <h2 className={styles.subheading}>Education</h2>
                <table className={styles.group__list}>
                  <tbody>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2018.04 - 2022.03</td>
                      <td className={styles.group__description}>
                        <div className={styles.group__title}>
                          <span className={styles.group__name}>京都芸術大学 通信教育部 デザイン科 グラフィックデザインコース</span>
                          <span className={styles.group__status}>（卒業）</span>
                        </div>
                        <div className={styles.unit}>
                          <ul className={styles.unit__list}>
                            <li className={styles.unit__item}>3年次編入で入学</li>
                            <li className={styles.unit__item}>タイポグラフィやピクトグラム、ウェブデザインなどの課題を通して、デザインの基本となる知識や表現方法を習得</li>
                            <li className={styles.unit__item}>表現力だけでなく企画や編集に必要な発想力・構想力を養う課題や、広告デザイン・エディトリアルデザインなどの実践的な課題にも取り組む</li>
                            <li className={styles.unit__item}>学びの集大成として、自身の研究テーマで卒業制作を経験</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2017.04 - 2018.02</td>
                      <td className={styles.group__description}>
                        <div className={styles.group__title}>
                          <span className={styles.group__name}>立命館大学大学院 情報理工学研究科 情報理工学専攻 人間情報科学コース</span>
                          <span className={styles.group__status}>（中退）</span>
                        </div>
                        <div className={styles.unit}>
                          <ul className={styles.unit__list}>
                            <li className={styles.unit__item}>共著の論文が論文誌に掲載される</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2013.04 - 2017.03</td>
                      <td className={styles.group__description}>
                        <div className={styles.group__title}>
                          <span className={styles.group__name}>立命館大学 情報理工学部 メディア情報学科</span>
                          <span className={styles.group__status}>（卒業）</span>
                        </div>
                        <div className={styles.unit}>
                          <ul className={styles.unit__list}>
                            <li className={styles.unit__item}>1年次にC言語などの学部共通科目を履修</li>
                            <li className={styles.unit__item}>2年次以降はメディア情報学科に進学し音声・画像・自然言語に関する科目を履修</li>
                            <li className={styles.unit__item}>3年次以降はヒューマンインターフェースや拡張現実感(AR)を専門とする木村研究室に所属し、ジュベナイルプロジェクトで<a href="http://www.rm.is.ritsumei.ac.jp/juvenile2016/index.html" className={styles.link__outward} target="_blank" rel="noopener noreferrer">Graffiti Hockey</a>を発表</li>
                            <li className={styles.unit__item}>4年次に卒業論文を執筆し、学会で論文の発表を行う</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.group}>
                <h2 className={styles.subheading}>Certification</h2>
                <table className={styles.group__list}>
                  <tbody>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2021.04</td>
                      <td className={styles.group__description}>
                        <span className={styles.group__name}>TOEIC 765</span>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2020.10</td>
                      <td className={styles.group__description}>
                        <span className={styles.group__name}>HTMLプロフェッショナル レベル2</span>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2019.11</td>
                      <td className={styles.group__description}>
                        <span className={styles.group__name}>HTMLプロフェッショナル レベル1</span>
                      </td>
                    </tr>
                    <tr className={styles.group__item}>
                      <td className={styles.group__term}>2013.09</td>
                      <td className={styles.group__description}>
                        <span className={styles.group__name}>普通自動車免許(AT限定)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* Profile end */}
        <section id="contact" className={styles.section}>
          <h1 className={styles.heading}>Contact</h1>
          <div className={styles.section__inner}>
            <div className={styles.contact}>
              <div className={styles.contact__text}>SNS</div>
              <ul className={styles.sns}>
                <li className={styles.sns__item}>
                  <a className={styles.sns__link} href="https://m.me/kazunori.matsunaga.90/" target="_blank" rel="noopener noreferrer"><Image src="/images/logo_messenger.svg" alt="Facebook Messengerのロゴ" width={40} height={40} /></a>
                </li>
                <li className={styles.sns__item}>
                  <a className={styles.sns__link} href="https://www.wantedly.com/id/kazunori_matsunaga_c" target="_blank" rel="noopener noreferrer"><Image src="/images/logo_wantedly.png" alt="Wantedlyのロゴ" width={48} height={38} /></a>
                </li>
                <li className={styles.sns__item}>
                  <a className={styles.sns__link} href="https://www.instagram.com/3tbell/" target="_blank" rel="noopener noreferrer"><Image src="/images/logo_instagram.png" alt="Instagramのロゴ" width={32} height={32} /></a>
                </li>
              </ul>
              <div className={styles.contact__text}>もしくは</div>
              <Button href="mailto:matsunagak333@gmail.com">
                メールで問い合わせる
              </Button>
            </div>
          </div>
        </section>
        {/* Contact end */}
      </Main>
      <Footer playlist />
    </>
  );
}