import Image from "next/image";
import Link from "next/link";
import pfp from "../../public/images/pfp.png";
import styles from "./tomatlogo.module.scss";

export default function TomatLogo({ width, height }) {
  return (
    <div className="center-flexible">
      <Link href="/">
        <a>
          <TomatPfp width={width} height={height} />
        </a>
      </Link>
      <Greeting />
    </div>
  );
}

function TomatPfp({ width, height }) {
  return (
    <Image
      src={pfp}
      width={width}
      height={height}
      alt="My Profile Picture"
      className={styles.profilePicture}
    />
  );
}

function Greeting() {
  return (
    <p className={styles.greetingText}>
      Hi there,{" "}
      <Link href="/">
        <a className={styles.tomatLink}>I'm Tomat.</a>
      </Link>
    </p>
  );
}
