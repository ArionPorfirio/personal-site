import { PostView } from '@components/PostView'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPosts } from 'services/fake'

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
  return <PostView postInfo={postInfo} content={content} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postPaths = getPosts().map((post) => ({ params: { slug: post.slug } }))

  return {
    paths: postPaths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPosts().find((post) => post.slug === params?.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const { content, ...postInfo } = post

  return {
    props: {
      postInfo,
      content,
    },
  }
}
