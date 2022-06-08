import styles from "./layout.module.scss";
import Shell from "./Shell";

export default function Layout({ children }) {
  return (
    <Shell>
      <div>
      <div className={styles.background} />
      <div className={styles.backgroundCover} />
      <main>
        <div className={styles.floatingPanel}>{children}</div>
      </main>
    </div>
    </Shell>
  );
}
