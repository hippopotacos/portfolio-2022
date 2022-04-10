import '../styles/reset.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper__inner">
          <Component {...pageProps} />
        </div>
      </div>
    </>
    
  );
}

export default MyApp
