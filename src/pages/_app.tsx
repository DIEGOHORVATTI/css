
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '@styles/global-style'
import 'normalize.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="../../public/favicon.ico" />
        <meta
          name="description"
          content="A simple project starter to word with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App