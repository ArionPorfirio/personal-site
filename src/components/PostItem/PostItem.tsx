import { FC } from 'react'
import Link from 'next/link'

import styles from './PostItem.module.scss'

type Post = {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
}

interface PostItemProps {
  item: Post
}

export const PostItem: FC<PostItemProps> = ({ item }) => {
  return (
    <Link href={`/post/${item.slug}`} passHref>
      <a className={styles.post_item}>
        <div>
          <h2>{item.title}</h2>
          <small>
            By <strong>{item.author}</strong>
            {' at '}
            <strong>{item.date}</strong>
          </small>

          <p>{item.excerpt}</p>
        </div>
      </a>
    </Link>
  )
}
