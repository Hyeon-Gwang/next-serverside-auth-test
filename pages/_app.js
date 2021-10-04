import '../styles/globals.css'
import { AuthProvider } from '../src/contextAPI/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <div id="main">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  )
}

export default MyApp
