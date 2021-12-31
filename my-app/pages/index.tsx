import Link from 'next/link'
import { client } from '../libs/client'

export default function IndexPage({ work }) {
  return(
    <>
      <div>
        <ul>
          {work.map((work)=>(
            <li key={work.id}>
              <Link href={`/works/${work.id}`}>
                <a>{work.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" })

  return {
    props: {
      work: data.contents
    }
  }
}