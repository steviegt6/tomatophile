import { useEffect, useState } from "react";
import { getDiscordProfileUrl } from "../../../lib/discordProfile";
import LoadingSpinner from "./LoadingSpinner";

const discordId = "269903979582849024";

export default function DiscordPfp({ width, height }) {
  const [image, setImage] = useState(<LoadingSpinner width={width} height={height} />);

  useEffect(() => {
    const doAsync = async () => {
      setImage(
        <div style={{ width: width, height: height }}>
          <img
            className="flex justify-center items-center rounded-full"
            src={await getDiscordProfileUrl(discordId)}
            width={width}
            height={height}
            alt={""}
          ></img>
        </div>
      );
    };

    doAsync();
  });

  return image;
}
