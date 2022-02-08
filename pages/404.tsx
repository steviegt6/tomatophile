import Link from "next/link";
import Layout from "../components/Layout";
import { resolveBgJsons } from "../components/utils/backgroundResolver";
import fourofour from "../styles/404/404.module.scss";

export default function Custom404({ bgJsons }: any) {
  return (
    <Layout bgJsons={bgJsons}>
      <div
        className={fourofour.centeredDiv}
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.9)",
          borderRadius: "6px",
          padding: "1em 2em"
        }}
      >
        <h1>Error 404: Page Not Found!</h1>
        <p>
          Quite odd, isn&apos;t it? If you believe this page{" "}
          <strong>
            <em>should</em>
          </strong>{" "}
          exist, or are pretty sure that it{" "}
          <strong>
            <em>did</em>
          </strong>
          , try contacting me.
          <br />
          <br />I prefer not to delete content. I like to keep everything
          accessible to everyone. If a page happens to be missing, it was either
          moved or is likely a mistake. Regardless, there isn&apos;t much use
          remaining here. Consider returning{" "}
          <Link href="/">
            <a>home</a>
          </Link>
          ?
        </p>
        <br />
        <img src={"/logo-inverted.png"} width={228} height={50}></img>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const bgJsons: string[] = resolveBgJsons();

  return {
    props: {
      bgJsons,
    },
    revalidate: 1
  };
}
