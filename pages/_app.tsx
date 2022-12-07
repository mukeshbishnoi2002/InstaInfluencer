import '../styles/globals.css'
import '../styles/Large.css'
import '../styles/Medium.css'
import '../styles/Small.css'
import '../styles/Extra_small.css'
import '../styles/Six_hundred.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])
  return  <Component {...pageProps} />

}
