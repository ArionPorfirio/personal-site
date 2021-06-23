import Prismic from '@prismicio/client'
import { DefaultClient } from '@prismicio/client/types/client'
import { Document } from '@prismicio/client/types/documents'

export const apiEndpoint = String(process.env.NEXT_PUBLIC_API_ENDPOINT)
export const [, repoName] = Array(
  /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint),
)

export function linkResolver(doc: Document): string {
  switch (doc.type) {
    case 'profile':
      return '/'

    case 'post':
      return `/post/${doc.uid}`

    default:
      return '/'
  }
}

export function getClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(apiEndpoint, { req })

  return prismic
}
