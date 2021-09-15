import { FC } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

import { CustomMarkdown } from '@components/CustomMarkdown'

import styles from './PostView.module.scss'

type PostInfo = {
  title: string
  author: string
  date: string
}

interface PostViewProps {
  postInfo: PostInfo
  content: string
}

export const PostView: FC<PostViewProps> = ({ postInfo, content }) => {
  return (
    <section className={styles.post_view}>
      <Link href="/" passHref>
        <a>
          <div className={styles.back_button}>
            <FaArrowLeft size={28} />
            <h2>Back</h2>
          </div>
        </a>
      </Link>

      <div className={styles.post_content}>
        <header>
          <h1>{postInfo.title}</h1>
          <small>
            By <strong>{postInfo.author}</strong>
            {' at '}
            <strong>{postInfo.date}</strong>
          </small>
          <hr />
        </header>

        <div>
          <CustomMarkdown>{content}</CustomMarkdown>
        </div>
      </div>
    </section>
  )
}
