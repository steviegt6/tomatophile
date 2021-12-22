import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Link from "next/link";

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
      <section>
        <h2>Interested in what I develop?</h2>
        <p>That's awesome! Nearly everything I make is open-source and often under libre licenses, so feel free to contribute ;).{" "}
        While many of my projects are listed under my <a href="https://github.com/Steviegt6">GitHub profile</a>, many others are grouped together under numerous organizations.</p>
        <ul>
          <li>Unorganized</li>
          <ul>
            <li><Link href="/"><a>Tomatophile</a></Link> - The source-code for this site. <code>(<a href="https://github.com/Steviegt6/Tomatophile">GitHub</a>)</code></li>
            <li>Stardew64Installer - A simple program that patches a Linux copy of Stardew Valley to work on Windows. <code>(<a href="https://github.com/Steviegt6/Stardew64Installer">GitHub</a>)</code></li>
            <li>Lunacy - A modification for Lunar Client's launcher, worked by patching unpacked files. <code>(<a href="https://github.com/Steviegt6/Lunacy">GitHub</a>)</code></li>
            <li>...and <a href="https://github.com/Steviegt6?tab=repositories">more</a>.</li>
          </ul>

          <li><a href="https://github.com/uranometrical">Uranometrical</a></li>
          <ul>
            <li>Constellar - A modern, extensible, mixin-based Minecraft PvP client with standalone and Forge support. <code>(<a href="https://github.com/uranometrical/constellar">GitHub</a>)</code></li>
            <li>Aurora - A modular Minecraft launcher alternative striving to replace standalone client launches. <code>(<a href="https://github.com/uranometrical/aurora">GitHub</a>)</code></li>
            <li><code>notes</code> - Public-domain documentation (often reverse-engineered) of other clients and modifications. Also has tutorials, among other things. <code>(<a href="https://github.com/uranometrical/notes">GitHub</a>)</code></li>
          </ul>

          <li><a href="https://github.com/TML-Patcher">TML.Patcher</a></li>
          <ul>
            <li>TML.Patcher - A command-line interface program for unpacking, repacking, and decompiling <code>.tmod</code> files for modifications and compatibility. <code>(<a href="https://github.com/TML-Patcher/TML.Patcher">GitHub</a>)</code></li>
            <li>Terraclient - A Terraria utility client developed with anarchy servers in mind. <code>(<a href="https://github.com/TML-Patcher/Terraclient">GitHub</a>)</code></li>
          </ul>

          <li><a href="https://github.com/TomatCord">TomatCord</a></li>
          <ul>
            <li>Tomat.TomatBot - A W.I.P., general-purpose Discord bot. <code>(<a href="https://github.com/TomatCord/TomatBot">GitHub</a>)</code></li>
            <li>Tomat.Framework - A framework for Discord bots running <code>Discord.NET</code>. <code>(<a href="https://github.com/TomatCord/Tomat.Framework">GitHub</a>)</code></li>
            <li>Tomat.TatsuSharp - A library that wraps around Tatsu's API. <code>(<a href="https://github.com/TomatCord/Tomat.TatsuSharp">GitHub</a>)</code></li>
          </ul>
        </ul>
        <p>Unfortunately, I have plenty of projects that I started as proof-of-concepts or for testing, which never full saw a glimpse of completion.{" "}
        If anyone is intersted, you are always free to contribute. I'll likely see any opened pull requests. I'm also willing to work on projects again if any interest in them is shown.</p>
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
