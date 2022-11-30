import '../styles/globals.css'
import '../styles/Large.css'
import '../styles/Medium.css'
import '../styles/Small.css'
import '../styles/Extra_small.css'
import '../styles/Six_hundred.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
