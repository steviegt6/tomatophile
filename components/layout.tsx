import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import "../components/utils/fileSystemFetching";

export const siteTitle = "Tomat";

export default function Layout({ children, home }) {
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
        <script type="text/javascript" src="./resources/js/progressBar.js"></script>
      </main>
    </div>
  );
}
