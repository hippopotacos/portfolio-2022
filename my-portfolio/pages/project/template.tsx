import Header from "../../components/Header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import Content from "../../components/Content"
import Image from "next/image"
import Link from "next/link"

export default function Template() {
  return (
    <>
      <Header />
      <Main>
        <Content>
          <h1>h1です</h1>
          <p>概要です。ここに<strong>strong</strong>。ここに<b>bold</b>。ここに<Link href="/">link</Link>。</p>
          <section>
            <h2>h2です</h2>
            <p>こんにちは</p>
            <section>
              <h3>h3です</h3>
              <p>以下のとおり</p>
              <ul>
                <li>a</li>
                <li>b</li>
              </ul>
            </section>
            <section>
              <h3>h3です</h3>
              <ol>
                <li>aa</li>
                <li>bb</li>
              </ol>
            </section>
          </section>
          <section>
            <h2>h2</h2>
            <p>テスト</p>
            <figure>
              <Image src="https://placehold.jp/1250x50.png" alt="test" width={1250} height={50} />
              <figcaption>test</figcaption>
            </figure>
            <p>あはは</p>
          </section>
        </Content>
        <Button href="/">
          TOPページにもどる
        </Button>
      </Main>
      <Footer />
    </>
  )
}