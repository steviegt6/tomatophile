import Link from "next/link";
import GenericLayout from "../components/GenericLayout";
import styles from "../styles/pages/index.module.scss";

export default function Index() {
  return (
    <GenericLayout home={true} /*title="index"*/>
      <ProfileHeader />
      <Introduction />
    </GenericLayout>
  );
}

function ProfileHeader() {
  return (
    <div className="flexible">
      <Link href="/">
        <img src="/pfp.png" height={100} width={100} className={styles.pfp} />
      </Link>
      <h1>Hey there, I'm Tomat.</h1>
    </div>
  );
}

function Introduction() {
  return (
    <div>
      <p>I&apos;m a programmer. I like to program.</p>
      <p>
        I enjoy reverse-engineering and game modding. I have developed an
        assortment of tools to aid in modding, as well as various mods and other
        such things for both players and developers.
      </p>
      <p>I prefer working backend, I'm not a frontend guy.</p>
    </div>
  );
}
