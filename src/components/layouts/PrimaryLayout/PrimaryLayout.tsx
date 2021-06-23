import { FC } from 'react'

import styles from './PrimaryLayout.module.scss'

interface PrimaryLayoutProps {}

export const PrimaryLayout: FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(/background.jpg)`,
        }}
        className={styles.page_background}
      />
      {children}
    </div>
  )
}
