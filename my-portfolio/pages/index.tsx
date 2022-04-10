import styles from "../styles/Home.module.scss"
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default function Home({ works }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ul>
          <li>test</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}