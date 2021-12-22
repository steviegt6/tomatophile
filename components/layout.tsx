import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import "../components/utils/fileSystemFetching";
import { startTimer } from "../components/progressBar";
import { useEffect } from "react";

export const siteTitle = "Tomat";

export default function Layout({ children, home }) {
  useEffect(() => {
    console.log('hi');
    startTimer();
  });

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div className={utilStyles.progressContainer + " " + utilStyles.fixedTop}>
          <span className={utilStyles.progressBar} id={"progress-bar"}></span>
        </div>
        {children}
      </main>
    </div>
  );
}
