import { FC } from 'react'
import { MdAdd } from 'react-icons/md'
import { PostItem } from '@components/PostItem'

import styles from './PostList.module.scss'

type Post = {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
}

interface PostListProps {
  list: Post[]
}

export const PostList: FC<PostListProps> = ({ list }) => {
  return (
    <main className={styles.main}>
      <h1>Blog</h1>

      {list.map((post) => (
        <PostItem key={post.slug} item={post} />
      ))}

      <button>
        Carregar Mais <MdAdd size={20} />
      </button>
    </main>
  )
}
