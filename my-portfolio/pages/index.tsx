import styles from "../styles/Home.module.scss"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
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