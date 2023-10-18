import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <AppBar />
    <Component {...pageProps} />
    <Footer />
  </>
}
