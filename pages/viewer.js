import styles from "../styles/Viewer.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";

function FormatDate(prop) {
  let cleandate = new Date(prop.gitdate);
  return cleandate.toLocaleString();
}

function DisplayData(props) {
  if (props.isError === true) {
    return (
      <div className={styles.repoerror}>
        Something went wrong ... Try again please
      </div>
    );
  }

  if (props.isLoading || props.data.length < 0) {
    return (
      <div className={styles.repoloading}>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        {props.data.map((item) => (
          <div className={styles.gridcontainer}>
            <div className={styles.commit}>
              <div className={styles.commitmessage}>{item.commit.message}</div>
              <div className={styles.commitauthor}>
                {item.commit.author.name}
              </div>
              <div className={styles.commitimage}>
                <img
                  src={
                    item.author !== null
                      ? item.author.avatar_url
                      : "https://via.placeholder.com/150x150?text=No Image"
                  }
                  alt="Avatar"
                  className={styles.commitimg}
                />
              </div>
              <div className={styles.committime}>
                {" "}
                {item.commit.author.date
                  ? FormatDate({ gitdate: item.commit.author.date })
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default function Viewer() {
  const router = useRouter();
  const repo = router.query.repo;
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(repo);
  const [repoHeading, setRepoText] = useState(repo);
  const [url, setUrl] = useState(
    `https://api.github.com/repos/${repo}/commits?per_page=10`
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        setIsLoading(false);
        setRepoText(query);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <div className={styles.gridheadcontainer}>
        <div className={styles.logo}>
          <a href="/">CommitViewer</a>
        </div>
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
            placeholder={repoHeading}
            className={styles.repotext}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div className={styles.button}>
          <button
            type="button"
            className={styles.buttontext}
            onClick={() => {
              setUrl(
                `https://api.github.com/repos/${query}/commits?per_page=10`
              );
            }}
          >
            {" "}
            See commits 🚀
          </button>
        </div>
      </div>

      <div className={styles.repobodyheading}>
        <p>{repoHeading}</p>
      </div>
      <DisplayData isError={isError} isLoading={isLoading} data={data} />
    </>
  );
}
