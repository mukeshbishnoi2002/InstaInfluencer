import '../styles/globals.css'
import '../styles/Large.css'
import '../styles/Medium.css'
import '../styles/Small.css'
import '../styles/Extra_small.css'
import '../styles/Six_hundred.css'
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    aos.init({
			delay: 400,
			duration: 800,
		});
  }, []);
  return  <Component {...pageProps} />

}
