import type { AppProps } from 'next/app'
import Head from 'next/head'

import { PrimaryLayout } from '@components/layouts'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Head>
        <title>Welcome | ariion.dev</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Arion's personal blog where he write about several things, mostly tech related stuff"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Component {...pageProps} />
    </PrimaryLayout>
  )
}

export default MyApp
