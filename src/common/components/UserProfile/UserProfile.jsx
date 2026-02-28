import React from 'react'

import styles from './UserProfile.module.scss'

export default function UserProfile({ user }) {
  if (!user) return null

  const { name, avatar, email, bio } = user

  return (
    <div className={styles.profile}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.email}>{email}</p>
        {bio && <p className={styles.bio}>{bio}</p>}
      </div>
    </div>
  )
}
