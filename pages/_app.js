import { wrapper } from '../store/store'
import '../styles/globals.scss'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)