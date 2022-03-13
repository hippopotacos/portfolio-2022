import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ works }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ul>
          {works.map((works) => (
            <li key={works.id}>
              <Link href={`/works/${works.id}`}>
                <a>{works.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents
    }
  };
};