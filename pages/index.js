import Head from 'next/head'
import styles from '../styles/Home2.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        <title>Lincoln Commit View Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="#" className={styles.logo}>CommitViewer</a>
        <ul className={styles.navigation}>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>

      <div className={styles.title}>
        Discover the world of code
      </div>

      <p className={styles.description}>
        Explore open source projects from GitHub, and read their commit history to see the story of how they were built.
      </p>


    </div>
  )
}
