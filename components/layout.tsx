import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import "../components/utils/fileSystemFetching";
import { startTimer } from "../components/progressBar";
import { useEffect } from "react";
import footerStyles from "../styles/footer.module.css";
import Link from "next/link";

export const siteTitle = "Tomat";

export default function Layout({ children, home }) {
  useEffect(() => {
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
        <ProgressBar />
        {children}
        <Navbar home={home} />
      </main>
    </div>
  );
}

export function ProgressBar() {
  return (
    <div className={utilStyles.progressContainer + " " + utilStyles.fixedTop}>
      <span className={utilStyles.progressBar} id={"progress-bar"}></span>
    </div>
  );
}

export function Navbar({ home }) {
  return (
    <div className={footerStyles.stickyFooter}><ReturnHome home={home}/><p>This website is available on <code><a href="https://github.com/Steviegt6/Tomatophile">GitHub</a></code> under the <code>ISC</code> license.</p></div>
  );
}

export function ReturnHome({ home }) {
  if (home)
    return <div />
  
  return (
    <p><Link href="/"><a>&lt;-- Return</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;</p>
  )
}
