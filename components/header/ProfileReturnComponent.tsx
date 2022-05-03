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
