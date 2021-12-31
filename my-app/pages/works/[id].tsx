import { client } from '../../libs/client'

export default function WorkId({ work }) {
  return (
    <>
      <div>
        <h1>{work.title}</h1>
        <p>{work.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${work.body}`
          }}
        />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" })
  const paths = data.contents.map((content) => `/works/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'works', contentId: id })

  return {
    props: {
      work: data
    }
  }
}