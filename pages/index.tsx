import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Tomat</title>
      </Head>
      <header className={styles.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={getRandomFile()}
            className={utilStyles.borderCircle}
            height={100}
            width={100}
            alt={"Tomat"}
          />
          <h1>{"Hey there, I'm Tomat."}</h1>
        </div>
      </header>
      <section>
        <h2>Who am I?</h2>
        <p>
          I'm Tomat, otherwise known as Stevie. I'm a professionally unprofessional software developer and game modder.
        </p>
      </section>
      <section>
        <h2>Want to contact me?</h2>
        <p>Feel free! I'm always open to talk.</p>
        <ul>
          <li>GitHub: <a href="https://github.com/Steviegt6">Steviegt6</a></li>
          <li>Discord: <code>Tomat#0001</code></li>
          <li>Matrix: <code>@tomat:matrix.org</code></li>
          <li>Email: <code>xxlennygamerxx@gmail.com</code> (no, that is not a joke)</li>
        </ul>
        <p>You can also find me on various other websites, it shouldn't be hard.{" "}
        I go by "Steviegt6", "Tomat", or "Tomatophile", most often.</p>
      </section>
    </Layout>
  );
}

function getRandomFile(): string {
  let pfps: string[] = ["0.png", "1.gif"];
  let res: string =
    "/resources/images/profiles/pfp" +
    pfps[Math.floor(Math.random() * pfps.length)].toString();
  console.log(res);
  return res;
}
