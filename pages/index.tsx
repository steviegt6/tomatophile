import Link from "next/link";
import GenericLayout from "../components/GenericLayout";
import styles from "../styles/pages/index.module.scss";

export default function Index() {
  return (
    <GenericLayout home={true} /*title="index"*/>
      <ProfileHeader />
      <Introduction />
      <br />
      <Commissions />
      <br />
      <Contact />
    </GenericLayout>
  );
}

function ProfileHeader() {
  return (
    <div className="flexible">
      <Link href="/">
        <img src="/pfp.png" height={100} width={100} className={styles.pfp} />
      </Link>
      <h1>Hey there, I&apos;m Tomat.</h1>
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
      <p>I prefer working backend, I&apos;m not a frontend guy.</p>
    </div>
  );
}

function Commissions() {
  return (
    <div>
      <h2>Commissions and Support</h2>
      <p>
        Programming is a hobby of mine. I don&apos;t have a programming job.
      </p>
      <p>Making money off of my hobby would be pretty neat!</p>
      <br />
      <p>
        If you&apos;re just interested in donating, you can do so through my{" "}
        <a href="https://patreon.com/tomatophile">Patreon</a> and{" "}
        <a href="https://ko-fi.com/tomatophile">Ko-Fi</a>.
      </p>
      <p>
        If you&apos;re looking to pay me to make something for you, I offer
        commissions at roughly 15 USD/hour. Contact me directly to inquire
        further.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>
        If possible, I would prefer to communicate directly though a chat
        service such as Discord.
      </p>
      <br />
      <p>
        Discord: <code>Tomat#0001</code>
      </p>
      <p>
        <a href="https://github.com/Steviegt6">GitHub:</a>{" "}
        <code>Steviegt6</code>
      </p>
      <p>
        Email: <code>xxlennygamerxx@gmail.com</code> (not a joke)
      </p>
    </div>
  );
}
