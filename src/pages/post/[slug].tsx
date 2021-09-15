import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import { PostView } from '@components/PostView'
import { getClient } from '@services/prismic'

type PostInfo = {
  title: string
  author: string
  date: string
}

interface PostProps {
  postInfo: PostInfo
  content: string
}

export default function Post({ postInfo, content }: PostProps) {
  return (
    <>
      <Head>
        <title>{postInfo.title} | ari0n.dev</title>
      </Head>
      <PostView postInfo={postInfo} content={content} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()
  const postsResponse = await client.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      pageSize: 1,
      page: 1,
      orderings: '[my.post.date desc]',
      lang: '*',
    },
  )
  const postsPaths = postsResponse.results.map((result) => ({
    params: { slug: result.uid! },
  }))

  return {
    paths: postsPaths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getClient()
  const postResponse = await client.queryFirst(
    [Prismic.Predicates.at('my.post.uid', String(params?.slug || ''))],
    { lang: '*' },
  )

  if (!postResponse) {
    return {
      notFound: true,
    }
  }

  const created_at = postResponse.first_publication_date
  const content = postResponse.data.content[0].text
  const postInfo: PostInfo = {
    title: postResponse.data.title[0].text,
    author: postResponse.data.author[0].text,
    date: created_at ? new Date(created_at).toLocaleString() : 'Not available',
  }

  return {
    props: {
      postInfo,
      content,
    },
  }
}
