import { FC } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import styles from './Profile.module.scss'

type ProfileInfo = {
  avatar: string
  fullName: string
  job: string
  github: string
  linkedin: string
  instagram: string
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
          alt={`${profileInfo.fullName}'s picture`}
        />
        <h1>{profileInfo.fullName}</h1>
        <p>{profileInfo.job}</p>
        <div>
          <a href={profileInfo.github}>
            <FaGithub size={32} />
          </a>
          <a href={profileInfo.linkedin}>
            <FaLinkedin size={32} />
          </a>
          <a href={profileInfo.instagram}>
            <FaInstagram size={32} />
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
