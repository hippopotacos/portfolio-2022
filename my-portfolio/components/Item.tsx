import styles from "../styles/Item.module.scss"

interface Props {
  term?: string
  emphasis?: boolean
  title?: string
  href?: string 
  position?: string
  status?: string
  children?: React.ReactNode
}

export const Item = ({term, emphasis, title, href, position, status, children} : Props) => {
  return (
    <>
      <div className={styles.item}>
        { emphasis ? (
            <dt className={styles.item__category}>{ term }</dt>
          ) : (
            <dt className={styles.item__term}>{ term }</dt>
          )
        }
        <dd className={styles.item__description}>
          <div className={styles.item__title}>
            <p>
              <span className={styles.item__name}>
                {
                  href ? (
                    <a className={styles.item__link} href={ href } target="_blank" rel="noopener noreferrer">{ title }</a>
                  ) : (
                    title
                  )
                }
              </span>
              { status && <span className={styles.item__status}>{ status }</span> }
            </p>
            { position && <p className={styles.item__position}>{ position }</p> }
          </div>
          <div>
            { children }
          </div>
        </dd>
      </div>
    </>
  )
}