import Link from "next/link";
import styles from "../../styles/components/header/profilereturncomponent.module.scss";
import GrayedPipe from "../display/GrayedPipe";
import { getClasses } from "../utilities/stringsAreAnnoying";

export default function ProfileReturnComponent({ home /*path, title*/ }: any) {
  return (
    <>
      <div className="flexible">
        <Link href="/">
          <img src="/pfp.png" height={48} width={48} className={styles.pfp} />
        </Link>
        <p className={styles.text}>Hey there, I&apos;m&nbsp;</p>
        <GetTomatLink home={home} />
      </div>
      <div className="flexible">
        <GetLinks />
      </div>
      {/*<div className={getClasses("flexible", styles.headerTitle)}>
        <h2 className={styles.text}>{title}</h2>
      </div>*/}
    </>
  );
}

function GetTomatLink({ home }: any) {
  if (home)
    return (
      <p className={getClasses(styles.text, styles.tomat, "ignore-links")}>
        Tomat
      </p>
    );

  return (
    <p className={getClasses(styles.text)}>
      <Link href="/">Tomat</Link>
    </p>
  );
}

function GetLinks() {
  return (
    <>
      <Link href="/"><a className={styles.text}>Home</a></Link>
      <GrayedPipe className={styles.text} />
      <Link href="/projects"><a className={styles.text}>Projects</a></Link>
      <GrayedPipe className={styles.text} />
      <Link href="/about"><a className={styles.text}>About</a></Link>
      <GrayedPipe className={styles.text} />
      <Link href="/wiki/en/main_page"><a className={styles.text}>Wiki</a></Link>
    </>
  );
}
