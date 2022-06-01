import Link from "next/link";
import styles from "./madewithlove.module.scss";

export default function MadeWithLove() {
  return (
    <p>
      Made with <span className={styles.heart}>&lt;3</span> <span className={styles.pipe}>|</span>{" "}
      <Link href="https://github.com/Steviegt6/tomatophile">
        <a>Open-source on GitHub</a>
      </Link>
    </p>
  );
}
