import AppBar from '@/components/AppBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <AppBar>Plataforma de Eventos</AppBar>
    <Component {...pageProps} />
  </>
}
