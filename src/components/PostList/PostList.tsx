import React from 'react'
import Prismic from '@prismicio/client'
import { MdAdd } from 'react-icons/md'

import { PostItem } from '@components/PostItem'

import styles from './PostList.module.scss'
import { getClient } from '@services/prismic'

type Post = {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
}

interface PostListProps {
  list: Post[]
  page: number
  pageSize: number
  totalPages: number
}

export const PostList: React.FC<PostListProps> = ({
  list,
  page,
  pageSize,
  totalPages,
}) => {
  const [pageCounter, setPageCounter] = React.useState(page)
  const [posts, setPosts] = React.useState<Post[]>(list)
  const [loading, setLoading] = React.useState(false)

  async function handleMorePostsClick() {
    setLoading(true)
    const client = getClient()
    const postsResponse = await client.query(
      [Prismic.Predicates.at('document.type', 'post')],
      {
        pageSize,
        page: page + 1,
        orderings: '[my.post.date desc]',
      },
    )
    const morePosts: Post[] = postsResponse.results.map(
      (result): Post => ({
        slug: result.uid!,
        title: result.data.title[0].text,
        author: result.data.author[0].text,
        date: result.first_publication_date!,
        excerpt: result.data.excerpt[0].text,
      }),
    )
    setPosts(posts.concat(morePosts))
    setPageCounter((pageCounter) => pageCounter + 1)
    setLoading(false)
  }

  return (
    <main className={styles.main}>
      <h1>Blog</h1>

      {posts.map((post) => (
        <PostItem key={post.slug} item={post} />
      ))}

      <button
        onClick={handleMorePostsClick}
        disabled={loading || totalPages === pageCounter}
      >
        {loading ? (
          'Loading...'
        ) : totalPages === pageCounter ? (
          'There is no more 😭️'
        ) : (
          <>
            Load more <MdAdd size={20} />
          </>
        )}
      </button>
    </main>
  )
}
