import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'

import { Profile } from '@components/Profile'
import { PostList } from '@components/PostList'
import { getClient } from '@services/prismic'

type ProfileInfo = {
  avatar: string
  fullname: string
  job: string
  github: string
  linkedin: string
  twitter: string
  email: string
}

type Post = {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
}

interface HomeProps {
  profile: ProfileInfo
  posts: Post[]
  page: number
  totalPages: number
  pageSize: number
}

export default function Home({
  profile,
  posts,
  page,
  pageSize,
  totalPages,
}: HomeProps) {
  return (
    <>
      <Profile profileInfo={profile} />
      {Boolean(posts.length) && (
        <PostList
          list={posts}
          page={page}
          pageSize={pageSize}
          totalPages={totalPages}
        />
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const client = getClient()
  const postsResponse = await client.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      pageSize: 10,
      page: 1,
      orderings: '[my.post.date desc]',
      lang: '*',
    },
  )
  const posts: Post[] = postsResponse.results.map(
    (result): Post => ({
      slug: result.uid!,
      title: result.data.title[0].text,
      author: result.data.author[0].text,
      date: new Date(result.first_publication_date!).toLocaleString(),
      excerpt: result.data.excerpt[0].text,
    }),
  )

  const profileResponse = await client.getSingle('profile', { lang: '*' })
  const {
    data: profileData = {
      avatar: {
        url: 'https://avatars.githubusercontent.com/u/6798992?v=4',
      },
      fullname: [{ text: 'Arion Porfirio' }],
      job: [{ text: 'Software Developer' }],
      github: { url: '#' },
      linkedin: { url: '#' },
      twitter: { url: '#' },
      email: [{ text: 'sayhi@ari0n.dev' }],
    },
  } = profileResponse || {}

  const profile: ProfileInfo = {
    avatar: profileData.avatar.url,
    fullname: profileData.fullname[0].text,
    job: profileData.job[0].text,
    github: profileData.github.url,
    linkedin: profileData.linkedin.url,
    twitter: profileData.twitter.url,
    email: profileData.email[0].text,
  }

  return {
    props: {
      profile,
      posts,
      page: postsResponse.page,
      pageSize: postsResponse.results_per_page,
      totalPages: postsResponse.total_pages,
    },
    revalidate: 60 * 5,
  }
}
