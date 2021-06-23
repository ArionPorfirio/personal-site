import { GetStaticProps } from 'next'

import { Profile } from '@components/Profile'
import { PostList } from '@components/PostList'
import { getPosts, getProfile } from 'services/fake'

type ProfileInfo = {
  avatar: string
  fullName: string
  job: string
  github: string
  linkedin: string
  instagram: string
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
}

export default function Home({ profile, posts }: HomeProps) {
  return (
    <>
      <Profile profileInfo={profile} />
      <PostList list={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const profile = getProfile()
  const posts = getPosts()

  return {
    props: { profile, posts },
    revalidate: 60 * 30,
  }
}
