import { FC } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import styles from './Profile.module.scss'

type ProfileInfo = {
  avatar: string
  fullname: string
  job: string
  github: string
  linkedin: string
  twitter: string
  email: string
}

interface ProfileProps {
  profileInfo: ProfileInfo
}

const Profile: FC<ProfileProps> = ({ profileInfo }) => {
  return (
    <header>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src={profileInfo.avatar}
          alt={`${profileInfo.fullname}'s picture`}
        />
        <h1>{profileInfo.fullname}</h1>
        <p>{profileInfo.job}</p>
        <div>
          <a href={profileInfo.github}>
            <FaGithub size={32} />
          </a>
          <a href={profileInfo.linkedin}>
            <FaLinkedin size={32} />
          </a>
          <a href={profileInfo.twitter}>
            <FaTwitter size={32} />
          </a>
        </div>
        <a href={`mailto:${profileInfo.email}`}>
          <span>
            <FiMail size={18} /> {profileInfo.email}
          </span>
        </a>
      </div>
    </header>
  )
}

export default Profile
