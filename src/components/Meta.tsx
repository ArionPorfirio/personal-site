import React from 'react'
import Head from 'next/head'

interface Props {
  defaultTitle: string
  description?: string
}

export function Meta({ defaultTitle, description }: Props) {
  const [title, setTitle] = React.useState(defaultTitle)

  React.useEffect(() => {
    setTitle((title) => `${title} | ${window.location.hostname}`)
  }, [])

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  )
}
