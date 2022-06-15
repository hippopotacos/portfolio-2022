import Header from "../../components/Header"
import Main from "../../components/Main"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import Layout from "../../components/Layout"
import { client } from '../../libs/client'
import Image from "next/image"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"

export default function Template({ works }: { works: any }) {
  return (
    <>
      <Head>
        <title>{works.title} - Kazunori MATSUNAGA Portfolio</title>
        <meta name="description" content={works.overview} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.kazunorimatsunaga.com/works/${works.id}`} />
        <meta property="og:title" content={`${works.title} - Kazunori MATSUNAGA Portfolio`} />
        <meta property="og:description" content={works.overview} />
        <meta property="og:site_name" content="Kazunori MATSUNAGA" />
        <meta property="og:image" content={works.keyVisual ? works.keyVisual.url : "https://www.kazunorimatsunaga.com/images/ogimage.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="images/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </Head>
      <Header />
      <Main>
        <Layout works>
          <div>
            {
              works.keyVisual ?
              <Image src={works.keyVisual.url} alt={`${works.title}のキービジュアル`} width={works.keyVisual.width} height={works.keyVisual.height} /> :
              <Image src="/images/noimage.png" alt={`${works.title}のキービジュアル`} width={1200} height={630} />
            }
          </div>
          <h1>{works.title}</h1>
          {
            works.overview &&
            <div
              dangerouslySetInnerHTML={{
                __html: `${works.overview}`,
              }}
            />
          }
          <dl>
            {
              works.url &&
              <div>
                <dt>URL</dt>
                <dd><a href={works.url} target="_blank" rel="noopener noreferrer">{works.url}</a></dd>
              </div> 
            }
            {
              works.term &&
              <div>
                <dt>期間</dt>
                <dd>{works.term}</dd>
              </div>
            }
            {
              works.role &&
              <div>
                <dt>役割</dt>
                <dd>{works.role}</dd>
              </div>
            }
            {
              works.tools &&
              <div>
                <dt>技術・ツール</dt>
                <dd>{works.tools}</dd>
              </div>      
            }    
          </dl>
          {
            works.body &&
            <div
              dangerouslySetInnerHTML={{
                __html: `${works.body}`,
              }}
            />
          }
        </Layout>
        <Button href="/">
          TOPページにもどる
        </Button>
      </Main>
      <Footer />
    </>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" })

  const paths = data.contents.map((content: any) => `/works/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({ endpoint: "works", contentId: id })

  return {
    props: {
      works: data,
    },
  }
};
