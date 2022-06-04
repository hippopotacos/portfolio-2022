import Header from "../../components/Header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import Content from "../../components/Content"
import { client } from '../../libs/client'
import Image from "next/image"

export default function Template({ works }) {
  return (
    <>
      <Header />
      <Main>
        <Content>
          <div>
            <Image src={works.keyVisual.url} alt="main visual" width={works.keyVisual.width} height={works.keyVisual.height} />
          </div>
          <h1>{works.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${works.overview}`,
            }}
          />
          <dl>
            <div>
              <dt>URL</dt>
              <dd><a href={works.url} target="_blank" rel="noopener noreferrer">{works.url}</a></dd>
            </div>
            <div>
              <dt>期間</dt>
              <dd>{works.term}</dd>
            </div>
            <div>
              <dt>役割</dt>
              <dd>{works.role}</dd>
            </div>
            <div>
              <dt>技術・ツール</dt>
              <dd>{works.tools}</dd>
            </div>          
          </dl>
          <div
            dangerouslySetInnerHTML={{
              __html: `${works.body}`,
            }}
          />
        </Content>
        <Button href="/">
          TOPページにもどる
        </Button>
      </Main>
      <Footer />
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};