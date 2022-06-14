import styles from "../styles/Home.module.scss"
import Header from "../components/Header"
import Main from '../components/Main'
import Footer from "../components/Footer"
import Link from "next/link"
import Image from 'next/image'
import { client } from "../libs/client"
import Layout from "../components/Layout"
import Introduction from "../components/Introduction"
import Contact from "../components/Contact"
import Head from "next/head"
import { GetStaticProps } from "next"

export default function Home({ works }: { works: any }) {
  return (
    <>
      <Head>
        <title>Kazunori MATSUNAGA</title>
        <meta name="description" content="フロントエンドディベロッパー。レスポンシブWebコーディング・CMS利用のWeb制作が経験豊富で、大規模サイトの制作・運用実績もある。興味のある領域は、ユーザーインターフェース・Webアクセシビリティ。工学・芸術の学士。趣味は音楽（鑑賞・演奏・制作）など。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kazunorimatsunaga.com/" />
        <meta property="og:title" content="Kazunori MATSUNAGA" />
        <meta property="og:description" content="フロントエンドディベロッパー。レスポンシブWebコーディング・CMS利用のWeb制作が経験豊富で、大規模サイトの制作・運用実績もある。興味のある領域は、ユーザーインターフェース・Webアクセシビリティ。工学・芸術の学士。趣味は音楽（鑑賞・演奏・制作）など。。" />
        <meta property="og:site_name" content="Kazunori MATSUNAGA" />
        <meta property="og:image" content="https://www.kazunorimatsunaga.com/images/ogimage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/images/favicon.svg" />
      </Head>
      <Header />
      <Main>
        <Layout>
          <h1 className={styles.hidden}>マツナガカズノリのポートフォリオサイト</h1>
          <Introduction />
          <section id="works" className={styles.section}>
            <h1>Works</h1>
            <div className={styles.section__inner}>
              <p>※株式会社アンクシステムズでの制作実績は除く</p>
              <ul className={styles.items}>
                {works.map((works: any) => (
                  <li key={works.id} className={styles.item}>
                    <Link href={`/works/${works.id}`}>
                      <a className={styles.item__inner}>
                        <p className={styles.item__thumbnail}>
                          {
                            works.keyVisual ?
                            <Image className={styles.item__image} src={works.thumbnail.url} alt={`${works.title}のサムネイル`} width={works.thumbnail.width} height={works.thumbnail.height} /> :
                            <Image className={styles.item__image} src="/images/noimage.png" alt={`${works.title}のサムネイル`} width={1200} height={630} />
                          }
                        </p>
                        <p className={styles.item__title}>{works.title}</p>
                        <p className={styles.item__date}>{works.releaseDay}</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Works end */}
          <section id="profile" className={styles.section}>
            <h1>Profile</h1>
            <div className={styles.section__inner}>
              <p>松永 知典 / Kazunori MATSUNAGA<br />1993年生まれ。京都府在住、大分県出身。</p>
              <div>
                <div className={styles.group}>
                  <h2>Type</h2>
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
                  <h2>Skill</h2>
                  <div className={styles.group__inner}>
                    <ul>
                      <li>主にフロントエンド分野でのWebサイト制作 (開発環境設定〜レスポンシブ対応の実装〜リリース〜運用)</li>
                      <li>品質、コスト、納期を天秤にかけて解決策を練り、提案すること</li>
                      <li>複数案件のスケジュール調整、優先順位づけ、スケジュール共有</li>
                      <li>社内外での様々な職種とのコミュニケーション (作業依頼や共同開発の連携など)</li>
                      <li>学習意欲を持ちながら取り組み、計画が変わってもやりきる</li>
                    </ul>
                  </div>
                  <div className={styles.group__inner}>
                    <table className={styles.group__list}>
                      <tbody>
                        <tr className={styles.group__item}>
                          <td className={styles.group__category}>Languages</td>
                          <td className={styles.group__description}>
                            <p><b>HTML/CSS/SCSS/JavaScript/TypeScript/EJS/Pug/PHP</b></p>
                            <p>実務経験なし: C/C++/C#/Perl/Java</p>
                          </td>
                        </tr>
                        <tr className={styles.group__item}>
                          <td className={styles.group__category}>Libraries & Frameworks</td>
                          <td className={styles.group__description}>
                            <p><b>jQuery/React/Next.js/Tailwind.css/Bootstrap</b></p>
                            <p>実務経験なし: Vue.js/Nuxt.js/Lottie</p>
                          </td>
                        </tr>
                        <tr className={styles.group__item}>
                          <td className={styles.group__category}>Tools & Platforms</td>
                          <td className={styles.group__description}>
                            <p><b>Git/GitHub/Backlog/Gulp/webpack/Docker/WordPress/MovableType/SHIRASAGI/Google Analytics/Google Tag Manager/Microsoft SharePoint/Microsoft Teams/Slack/Chatwork</b></p>
                            <p>実務経験なし: Vercel/Netlify/MicroCMS/Storybook</p>
                          </td>
                        </tr>
                        <tr className={styles.group__item}>
                          <td className={styles.group__category}>Design</td>
                          <td className={styles.group__description}>
                            <p><b>Adobe Photoshop/Adobe Illustrator/Adobe XD</b></p>
                            <p>実務経験なし: Figma/Sketch/Adobe After Effect/Adobe Premiere Pro</p>
                            <p><small>※いずれも新規デザイン提案はなし</small></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={styles.group}>
                  <h2>Will</h2>
                  <div className={styles.group__inner}>
                    <ul>
                      <li>勉強への苦手意識を解くことや、学習を面白いと思ってもらえるような取り組みによって、人々の人生を豊かに</li>
                      <li>アクセシビリティ向上、デザインシステム改善、持続可能性の高いUIの制作など、プロダクトの改善</li>
                      <li>表現の追求（趣味での制作を含む）</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.group}>
                  <h2>Experience</h2>
                  <table className={styles.group__list}>
                    <tbody>
                      <tr className={styles.group__item}>
                        <td className={styles.group__term}>2018.04 - 2022.05</td>
                        <td className={styles.group__description}>
                          <div className={styles.group__title}>
                            <span className={styles.group__name}>
                              <a className={styles.link__outward} href="https://www.ankh-systems.co.jp/" target="_blank" rel="noopener noreferrer">株式会社アンクシステムズ</a>
                              </span>
                            <span className={styles.group__position}>フロントエンドディベロッパー</span>
                          </div>
                          <div>
                            <ul>
                              <li>クライアントや社内における約30のプロジェクトで、Web制作に従事</li>
                              <li>HTML、CSS、JavaScriptを基礎とし、SCSS、TypeScript、jQuery、React、Next.js、WordPressなど、さまざまな言語・ライブラリ・フレームワーク・CMSを利用</li>
                              <li>クライアント含め、エンジニア、デザイナー、プロデューサーなど、さまざまな職種と日常的にコミュニケーションをとる</li>
                              <li>新入社員の教育 (OJTや社内報告のサポート)</li>
                              <li>ソースコードのレビュー</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr className={styles.group__item}>
                        <td className={styles.group__term}>2013.09 - 2018.03</td>
                        <td className={styles.group__description}>
                          <div className={styles.group__title}>
                            <span className={styles.group__name}>
                              <a className={styles.link__outward} href="https://www.goalfree.co.jp/" target="_blank" rel="noopener noreferrer">株式会社成基</a>
                              </span>
                            <span className={styles.group__position}>コーチ (アルバイト)</span>
                          </div>
                          <div>
                            <ul>
                              <li>1対2の個別指導塾 (個別教育ゴールフリー) で小中高生の英、数、理を担当</li>
                              <li>傾聴、質問、承認のコーチングスキルを重要視する環境</li>
                              <li>教室内の成績向上を目指して、目標達成シートや質問シートなどを立案し、教室内で運用</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr className={styles.group__item}>
                        <td className={styles.group__term}>2017.08, 2017.11 - 2017.12</td>
                        <td className={styles.group__description}>
                          <div className={styles.group__title}>
                            <span className={styles.group__name}>
                              <a className={styles.link__outward} href="https://dena.com/jp/" target="_blank" rel="noopener noreferrer">株式会社ディー・エヌ・エー</a>
                              </span>
                            <span className={styles.group__position}>UI/UXデザイナー (インターン)</span>
                          </div>
                          <div>
                            <ul>
                              <li>UI/UXデザイナーの養成スクールに参加</li>
                              <li>デザイン基礎講義 (レイアウト・ツール・配色・タイポグラフィ) の受講</li>
                              <li>デザイン作成とフィードバック</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="education" className={styles.group}>
                  <h2>Education</h2>
                  <table className={styles.group__list}>
                    <tbody>
                      <tr className={styles.group__item}>
                        <td className={styles.group__term}>2018.04 - 2022.03</td>
                        <td className={styles.group__description}>
                          <div className={styles.group__title}>
                            <span className={styles.group__name}>京都芸術大学 通信教育部 デザイン科 グラフィックデザインコース</span>
                            <span className={styles.group__status}>（卒業）</span>
                          </div>
                          <div>
                            <ul>
                              <li>3年次編入で入学</li>
                              <li>タイポグラフィやピクトグラム、ウェブデザインなどの課題を通して、デザインの基本となる知識や表現方法を習得</li>
                              <li>表現力だけでなく企画や編集に必要な発想力・構想力を養う課題や、広告デザイン・エディトリアルデザインなどの実践的な課題にも取り組む</li>
                              <li>学びの集大成として、自身の研究テーマで卒業制作を経験</li>
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
                          <div>
                            <ul>
                              <li>共著の<a className={styles.link__outward} href="http://www.rm.is.ritsumei.ac.jp/pdf/TVRSJ2017_mori.pdf" target="_blank" rel="noopener noreferrer">論文</a>が論文誌に掲載される</li>
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
                          <div>
                            <ul>
                              <li>1年次にC言語などの学部共通科目を履修</li>
                              <li>2年次以降はメディア情報学科に進学し音声・画像・自然言語に関する科目を履修</li>
                              <li>3年次以降はヒューマンインターフェースや拡張現実感(AR)を専門とする木村研究室に所属し、ジュベナイルプロジェクトで<a className={styles.link__outward} href="http://www.rm.is.ritsumei.ac.jp/juvenile2016/index.html" target="_blank" rel="noopener noreferrer">Graffiti Hockey</a>を発表</li>
                              <li>4年次に卒業論文を執筆し、学会でも<a className={styles.link__outward} href="http://www.rm.is.ritsumei.ac.jp/pdf/IPSJ2017_matsunaga.pdf" target="_blank" rel="noopener noreferrer">論文</a>の発表を行う</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.group}>
                  <h2>Certification</h2>
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
                          <span className={styles.group__name}>
                            <a className={styles.link__outward} href="https://html5exam.jp/outline/lv2.html" target="_blank" rel="noopener noreferrer">HTMLプロフェッショナル レベル2</a>
                          </span>
                        </td>
                      </tr>
                      <tr className={styles.group__item}>
                        <td className={styles.group__term}>2019.11</td>
                        <td className={styles.group__description}>
                          <span className={styles.group__name}>
                            <a className={styles.link__outward} href="https://html5exam.jp/outline/lv1.html" target="_blank" rel="noopener noreferrer">HTMLプロフェッショナル レベル1</a>
                          </span>
                        </td>
                      </tr>
                      <tr className={styles.group__item}>
                        <td className={styles.group__term}>2013.09</td>
                        <td className={styles.group__description}>
                          <span className={styles.group__name}>普通自動車第一種運転免許（AT限定）取得</span>
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
            <h1>Contact</h1>
            <div className={styles.section__inner}>
              <Contact />
            </div>
          </section>
          {/* Contact end */}
        </Layout>
      </Main>
      <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents
    }
  };
};
