import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import Layout from "../components/Layout"
import Image from "next/image"
import Button from "../components/Button"
import Footer from "../components/Footer"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>お探しのページが見つかりません - Kazunori MATSUNAGA Portfolio</title>
        <link rel="shortcut icon" href="/images/favicon.svg" />
      </Head>
      <Header />
      <Main>
        <Layout>
          <h1>
            <Image src="/images/404.svg" alt="404 not found" width={135} height={78} />
          </h1>
          <p>お探しのページが見つかりません。<br />入力したアドレスが間違っているか、移動もしくは削除された可能性があります。</p>
        </Layout>
        <Button href="/">
          TOPページにもどる
        </Button>
      </Main>
      <Footer playlist />
    </>
  );
}