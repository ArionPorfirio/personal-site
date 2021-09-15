import { Meta } from '@components/Meta'
import Link from 'next/link'

export default function Page404() {
  return (
    <>
      <Meta defaultTitle="404" description="There is nothing here" />
      <div
        style={{
          height: '100vh',
          color: 'var(--text-primary)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'capitalize',
        }}
      >
        <h1>404</h1>
        <h2>The page you are looking for was not found</h2>
        <Link href="/" passHref>
          <a>
            <strong>Back</strong>
          </a>
        </Link>
      </div>
    </>
  )
}
