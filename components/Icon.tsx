import Image from "next/image";
import index from "../styles/index/index.module.scss";

export declare type IconProps = {
  src: string;
  value: string;
};

export function ProfileIcon({ src, value }: IconProps) {
  return (
    <a href={value} className="ignore-links">
      <GetIcon src={src} value={""} />
    </a>
  );
}

export function IdentifierIcon({ src, value }: IconProps) {
  return (
    <div onClick={getUniqueCopy(value)}>
      <GetIcon src={src} value={""} />
    </div>
  );
}

function GetIcon({ src }: IconProps) {
  return <Image src={src} width={64} height={64} className={index.iconImage} />;
}

function getUniqueCopy(value: string) {
  return () => {
    navigator.clipboard.writeText(value);
  };
}
