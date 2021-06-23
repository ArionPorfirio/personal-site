import Link from 'next/link'

export default function Page404() {
  return (
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
      <h1>Página não encontrada</h1>
      <Link href="/" passHref>
        <a>
          <strong>Voltar</strong>
        </a>
      </Link>
    </div>
  )
}
