import { useEffect, useState } from "react";
import { getDiscordProfileUrl } from "../../../lib/discordProfile";

const discordId = "269903979582849024";

export interface Props {
  width: number;
  height: number;
  overrideUrl: string | undefined;
}

interface ImageProps {
  width: number;
  height: number;
  src: string;
}

export default function DiscordPfp({
  width,
  height,
  overrideUrl = undefined,
}: Props) {
  const useOverride = overrideUrl !== undefined;
  const [image, setImage] = useState(
    useOverride ? (
      <Image width={width} height={height} src={overrideUrl} />
    ) : (
      <p>Remind me to put something here.</p>
    )
  );

  if (!useOverride) {
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
  }

  return image;
}

function Image({ width, height, src }: ImageProps) {
  return (
    <div style={{ width: width, height: height }}>
      <img
        className="flex justify-center items-center rounded-full"
        src={src}
        width={width}
        height={height}
        alt={""}
      ></img>
    </div>
  );
}
