import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.background} />
      <div className={styles.backgroundCover} />
      <main>
        <div className={styles.floatingPanel}>{children}</div>
      </main>
    </div>
  );
}
