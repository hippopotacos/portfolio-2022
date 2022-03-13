import '../styles/reset.css'
import '../styles/globals.css'

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
