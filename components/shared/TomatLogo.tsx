import Image from "next/image";
import Link from "next/link";
import TomatPfp from "../../public/images/pfp.png";
import styles from "./tomatlogo.module.scss";

export default function TomatLogo({ width, height }) {
  return (
    <Link href="/">
      <a className={styles.tomatLink + " center-flexible"}>
        <Image
          src={TomatPfp}
          width={width}
          height={height}
          alt="My Profile Picture"
          className={styles.profilePicture}
        />
        <p className={styles.greetingText}>Hi there, I'm Tomat.</p>
      </a>
    </Link>
  );
}
