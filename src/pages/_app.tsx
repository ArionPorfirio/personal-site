import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'
import { PrimaryLayout } from '@components/layouts'
import { Meta } from '@components/Meta'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Meta
        defaultTitle="Welcome"
        description="Arion's personal blog where he write about several things, mostly tech related stuff"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </PrimaryLayout>
  )
}

export default MyApp
