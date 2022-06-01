import Head from "next/head";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Tomat</title>
      </Head>
      <h1>Hi there, I'm Tomat.</h1>
      <p>I'a backend programmer. I enjoy game modding and reverse-engineering, among other things.</p>
    </Layout>
  );
}
