import React from "react";
import styles from "./PageNotFound.module.css";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className={styles.pageNotFound}>
      <div className={styles.container}>
        <header className={styles.text}>
          <h1>Page Not Found</h1>
          <p>We can't seem to find the page you're looking for.</p>
          <p>Please check the URL for any typos.</p>
        </header>
        <figure className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png"
            alt="Error"
          />
        </figure>
        <nav>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/chat">Go to Chat Page</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default PageNotFound;
