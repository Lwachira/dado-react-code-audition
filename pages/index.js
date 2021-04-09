import Head from 'next/head'
import styles from '../styles/Home2.module.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

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


      <div className={styles.reposearch}>
        <div className={styles.repoinput}>
          <FontAwesomeIcon icon={faSearch} className={styles.font}></FontAwesomeIcon>
          <input type="text" placeholder="Eg. facebook/react" className={styles.buttontext} />
        </div>

        <div className={styles.buttoncommit}>
          <button type="button" class={styles.button} onClick={() => { alert('alert'); }}>See commits 🚀</button>
        </div>

        <div className={styles.suggestrepodescrip}>
          Or pick one of these suggested repos
      </div>

        <div className={styles.suggestions}>
          <button type="button" placeholder="Eg. facebook/react" className={styles.suggestionitem}>django/django</button>
          <button type="button" placeholder="Eg. facebook/react" className={styles.suggestionitem}>microsoft/vscode</button>
          <button type="button" placeholder="Eg. facebook/react" className={styles.suggestionitem}>jezen/is-thirteen</button>
          <button type="button" placeholder="Eg. facebook/react" className={styles.suggestionitem}>benawad/dogehouse</button>


        </div>

      </div>


    </div>



  )
}
