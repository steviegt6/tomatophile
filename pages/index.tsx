import Head from "next/head";
import Layout from "../components/layout";
import { setHeader } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  setHeader(<p>Welcome to my website!</p>);

  function copy(text) {
    navigator.clipboard.writeText(text);
  }

  function copyDiscord() {
    copy("Tomat#0001");
  }

  function copyMatrix() {
    copy("@tomat:matrix.org");
  }

  function copyEmail() {
    copy("xxlennygamerxx@gmail.com");
  }

  return (
    <Layout home>
      <Head>
        <title>Tomat</title>
      </Head>
      <header className={styles.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            suppressHydrationWarning={true}
            src={
              "https://cdn.discordapp.com/avatars/269903979582849024/dd48c750c2ab4be7b3c228e92562e2df.webp"
            }
            className={utilStyles.borderCircle + " " + utilStyles.pfp}
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
          I'm Tomat, otherwise known as Stevie. I'm a &quot;professionally
          unprofessional&quot; software developer and game modder. I enjoy
          reverse-engineering and modding software, as well as sharing my
          creations with others.
        </p>
      </section>
      <br />
      <section>
        <h2>Socials 'n Stuff</h2>

        <h5 className={utilStyles.tip}>
          <p>Click to open my profile.</p>
        </h5>
        <div className={utilStyles.flexDiv + " " + utilStyles.svgDisplay}>
          <a id="ignore" href="https://github.com/Steviegt6">
            <Image
              src="/resources/fontawesome-free/svgs/brands/github.svg"
              height={64}
              width={64}
            />
          </a>
          <a id="ignore" href="https://reddit.com/u/Steviegt6">
            <Image
              src="/resources/fontawesome-free/svgs/brands/reddit.svg"
              height={64}
              width={64}
            />
          </a>
          <a
            id="ignore"
            href="https://www.youtube.com/channel/UCfbypg5MgXPFPnJkP-55gRA"
          >
            <Image
              src="/resources/fontawesome-free/svgs/brands/youtube.svg"
              height={64}
              width={64}
            />
          </a>
        </div>

        <br />

        <h5 className={utilStyles.tip}>
          <p>Click to copy identifiers.</p>
        </h5>
        <div className={utilStyles.flexDiv + " " + utilStyles.svgDisplay}>
          <Image
            src="/resources/fontawesome-free/svgs/brands/discord.svg"
            height={64}
            width={64}
            onClick={copyDiscord}
          />
          <Image
            src="/resources/images/element.png"
            height={64}
            width={64}
            onClick={copyMatrix}
          />
          <Image
            src="/resources/fontawesome-free/svgs/solid/envelope.svg"
            height={64}
            width={64}
            onClick={copyEmail}
          />
        </div>
      </section>

      {/*
      <section>
        <h2>Interested in what I develop?</h2>
        <p>
          That's awesome! Nearly everything I make is open-source and often
          under libre licenses, so feel free to contribute ;). While many of my
          projects are listed under my{" "}
          <a href="https://github.com/Steviegt6">GitHub profile</a>, many others
          are grouped together under numerous organizations.
        </p>
        <ul>
          <li>Unorganized</li>
          <ul>
            <li>
              <Link href="/">
                <a>Tomatophile</a>
              </Link>{" "}
              - The source-code for this site.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/Steviegt6/Tomatophile">GitHub</a>)
              </code>
            </li>
            <li>
              Stardew64Installer - A simple program that patches a Linux copy of
              Stardew Valley to work on Windows.{" "}
              <code className={"ignore-md"}>
                (
                <a href="https://github.com/Steviegt6/Stardew64Installer">
                  GitHub
                </a>
                )
              </code>
            </li>
            <li>
              Lunacy - A modification for Lunar Client's launcher, worked by
              patching unpacked files.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/Steviegt6/Lunacy">GitHub</a>)
              </code>
            </li>
            <li>
              ...and{" "}
              <a href="https://github.com/Steviegt6?tab=repositories">more</a>.
            </li>
          </ul>

          <li>
            <a href="https://github.com/uranometrical">Uranometrical</a>
          </li>
          <ul>
            <li>
              Constellar - A modern, extensible, mixin-based Minecraft PvP
              client with standalone and Forge support.{" "}
              <code className={"ignore-md"}>
                (
                <a href="https://github.com/uranometrical/constellar">GitHub</a>
                )
              </code>
            </li>
            <li>
              Aurora - A modular Minecraft launcher alternative striving to
              replace standalone client launches.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/uranometrical/aurora">GitHub</a>)
              </code>
            </li>
            <li>
              <code className={"ignore-md"}>
                <Link href="/projects/uranometrical-notes/home">
                  <a>notes</a>
                </Link>
              </code>{" "}
              - Public-domain documentation (often reverse-engineered) of other
              clients and modifications. Also has tutorials, among other things.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/uranometrical/notes">GitHub</a>)
              </code>
            </li>
          </ul>

          <li>
            <a href="https://github.com/TML-Patcher">TML.Patcher</a>
          </li>
          <ul>
            <li>
              TML.Patcher - A command-line interface program for unpacking,
              repacking, and decompiling{" "}
              <code className={"ignore-md"}>.tmod</code> files for modifications
              and compatibility.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/TML-Patcher/TML.Patcher">GitHub</a>
                )
              </code>
            </li>
            <li>
              Terraclient - A Terraria utility client developed with anarchy
              servers in mind.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/TML-Patcher/Terraclient">GitHub</a>
                )
              </code>
            </li>
          </ul>

          <li>
            <a href="https://github.com/TomatCord">TomatCord</a>
          </li>
          <ul>
            <li>
              Tomat.TomatBot - A W.I.P., general-purpose Discord bot.{" "}
              <code className={"ignore-md"}>
                (<a href="https://github.com/TomatCord/TomatBot">GitHub</a>)
              </code>
            </li>
            <li>
              Tomat.Framework - A framework for Discord bots running{" "}
              <code className={"ignore-md"}>Discord.NET</code>.{" "}
              <code className={"ignore-md"}>
                (
                <a href="https://github.com/TomatCord/Tomat.Framework">
                  GitHub
                </a>
                )
              </code>
            </li>
            <li>
              Tomat.TatsuSharp - A library that wraps around Tatsu's API.{" "}
              <code className={"ignore-md"}>
                (
                <a href="https://github.com/TomatCord/Tomat.TatsuSharp">
                  GitHub
                </a>
                )
              </code>
            </li>
          </ul>
        </ul>
        <p>
          Unfortunately, I have plenty of projects that I started as
          proof-of-concepts or for testing, which never reached completion. If
          anyone is intersted, you are always free to contribute. I'll likely
          see any opened pull requests. I'm also willing to work on projects
          again if any interest in them is shown.
        </p>
      </section>
                */}
    </Layout>
  );
}
