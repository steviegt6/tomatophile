import type { NextPage } from "next";
import Head from "next/head";
import generic from "../styles/generic.module.scss";
import index from "../styles/index/index.module.scss";
import { IdentifierIcon, ProfileIcon } from "../components/Icon";
import Link from "next/link";
import { NotificationHeader } from "../components/NotificationHeader";

const Index: NextPage = () => {
  return (
    <>
      <div className={generic.container}>
        <Head>
          <title>tomat</title>
          <meta name="description" content="Tomato" />
        </Head>
        <div>
          <GreetingSection />
          <WhoAmISection />
          <br />
          <SocialsSection />
          <br />
          <PortfolioLinksSection />
        </div>
      </div>
    </>
  );
};

export default Index;

function GreetingSection() {
  return (
    <>
      <div className={generic.centerFlex}>
        <img src="/pfp.png" width={100} height={100} className={index.pfp} />
        <h1>Hey there, I&apos;m Tomat!</h1>
      </div>
    </>
  );
}

function WhoAmISection() {
  return (
    <>
      <div className={index.flexConstrain}><h2>Who am I?</h2></div>
      <p>
        I&apos;m Tomat, otherwise known as Stevie. Call me a &quot;professionally
        unprofessional&quot; software develop, if you&apos;d like. Most of my effort
        is put into game modding, but I have developed software independently
        and have created outside tools to aid in modding. I enjoy
        reverse-engineering, programming, and sharing my creations with others.
      </p>
    </>
  );
}

function SocialsSection() {
  return (
    <>
      <div className={index.flexConstrain}><h2>Socials &apos;n Stuff</h2></div>
      <h6 className={index.tip + " " + index.firstTip + " ignore-headers"}>
        Click to open a profile.
      </h6>
      <div className={index.iconArray}>
        <ProfileIcon
          src="/icons/github.png"
          value="https://github.com/Steviegt6"
        />
        <ProfileIcon
          src="/icons/reddit.png"
          value="https://reddit.com/u/Steviegt6"
        />
        <ProfileIcon
          src="/icons/youtube.png"
          value="https://www.youtube.com/channel/UCfbypg5MgXPFPnJkP-55gRA"
        />
      </div>
      <h6 className={index.tip + " ignore-headers"}>
        Click to open a profile.
      </h6>
      <div className={index.iconArray}>
        <IdentifierIcon src="/icons/discord.png" value="Tomat#0001" />
        <IdentifierIcon src="/icons/matrix.png" value="@tomat:matrix.org" />
        <IdentifierIcon
          src="/icons/envelope.png"
          value="xxlennygamerxx@gmail.com"
        />
      </div>
    </>
  );
}

function PortfolioLinksSection() {
  return (
    <>
      <div className={index.flexConstrain}><h2>Portfolio</h2></div>
      <p>
        Interested in what I make? Want to know what I&apos;m capable of? Sweet! Stay
        tuned for an{" "}
        <Link href="/me/portfolio">
          <a>eventual portfolio</a>
        </Link>
        ...
      </p>
    </>
  );
}
