import Head from "next/head";
import styles from "./layout.module.css";
import "../components/utils/fileSystemFetching";

const name = "Tomat";
export const siteTitle = "Tomat";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
