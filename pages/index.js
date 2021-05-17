import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [disableCommit, setDisableCommit] = useState(true);
  const [repoText, setRepoText] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        <title>Lincoln Commit View Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          CommitViewer
        </a>
        <ul className={styles.navigation}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>

      <div className={styles.title}>Discover the world of code</div>

      <p className={styles.description}>
        Explore open source projects from GitHub, and read their commit history
        to see the story of how they were built.
      </p>

      <div className={styles.reposearch}>
        <div className={styles.repoinput}>
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.font}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8973 11H11.1462L10.88 10.73C12.0209 9.33002 12.6103 7.42001 12.2871 5.39002C11.8402 2.61002 9.63465 0.390015 6.97273 0.0500152C2.95133 -0.469985 -0.433105 3.09002 0.0612515 7.32002C0.384484 10.12 2.495 12.44 5.13791 12.91C7.0678 13.25 8.88361 12.63 10.2146 11.43L10.4713 11.71V12.5L14.5117 16.75C14.9014 17.16 15.5384 17.16 15.9282 16.75C16.318 16.34 16.318 15.67 15.9282 15.26L11.8973 11ZM6.19317 11C3.82596 11 1.91509 8.99002 1.91509 6.50002C1.91509 4.01002 3.82596 2.00002 6.19317 2.00002C8.56037 2.00002 10.4713 4.01002 10.4713 6.50002C10.4713 8.99002 8.56037 11 6.19317 11Z"
              fill="#29335C"
            />
          </svg>

          <input
            type="text"
            placeholder="Eg. facebook/react"
            className={styles.repotext}
            onChange={(e) => {
              setDisableCommit(false);
              setRepoText(e.target.value);
            }}
          />
        </div>

        <div className={styles.buttoncommit}>
          <button
            type="button"
            className={styles.button}
            disabled={disableCommit}
            onClick={() => {
              router.push(`/viewer?repo=${repoText}`, undefined, {
                shallow: true,
              });
            }}
          >
            {disableCommit ? "Enter Repo" : "See commits 🚀"}
          </button>
        </div>

        <div className={styles.suggestrepodescrip}>
          Or pick one of these suggested repos
        </div>

        <div className={styles.suggestions}>
          <button
            type="button"
            placeholder="Eg. facebook/react"
            className={styles.suggestionitem}
            onClick={() => {
              router.push("/viewer?repo=django/django", undefined, {
                shallow: true,
              });
            }}
          >
            django/django
          </button>
          <button
            type="button"
            placeholder="Eg. facebook/react"
            className={styles.suggestionitem}
            onClick={() => {
              router.push("/viewer?repo=microsoft/vscode", undefined, {
                shallow: true,
              });
            }}
          >
            microsoft/vscode
          </button>
          <button
            type="button"
            placeholder="Eg. facebook/react"
            className={styles.suggestionitem}
            onClick={() => {
              router.push("/viewer?repo=jezen/is-thirteen", undefined, {
                shallow: true,
              });
            }}
          >
            jezen/is-thirteen
          </button>
          <button
            type="button"
            placeholder="Eg. facebook/react"
            className={styles.suggestionitem}
            onClick={() => {
              router.push("/viewer?repo=benawad/dogehouse", undefined, {
                shallow: true,
              });
            }}
          >
            benawad/dogehouse
          </button>
        </div>
      </div>
    </div>
  );
}
