import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanyardResponse } from "../../lib/lanyard";
import pfp from "../../public/images/pfp.png";
import styles from "./tomatlogo.module.scss";

const lanyardUserEnpoint = "https://api.lanyard.rest/v1/users/";
const discordId = "269903979582849024";
const discordEndpoint = "https://cdn.discordapp.com/avatars/" + discordId + "/";
const extensions = {
  true: ".gif",
  false: ".png",
};

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
  const [image, setImage] = useState<string | StaticImageData>(pfp);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(lanyardUserEnpoint + discordId);
      const json = (await resp.json()) as LanyardResponse;
      const avatar = json.data.discord_user.avatar;
      const ext = extensions[String(avatar.startsWith("a_"))];
      setImage(discordEndpoint + avatar + ext);
    };

    fetchData();
  }, []);

  return (
    <Image
      src={image}
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
