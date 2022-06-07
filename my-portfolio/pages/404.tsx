import Header from "../components/Header";
import Main from "../components/Main";
import Content from "../components/Content";
import Image from "next/image";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <>
      <Header />
      <Main>
        <Content>
          <div>
            <h1>
              <Image src="/images/404.svg" alt="404 not found" width={135} height={78} />
            </h1>
            <p>お探しのページが見つかりません。<br />入力したアドレスが間違っているか、移動もしくは削除された可能性があります。</p>
          </div>
        </Content>
        <Button href="/">
          TOPページにもどる
        </Button>
      </Main>
      <Footer playlist />
    </>
  );
}