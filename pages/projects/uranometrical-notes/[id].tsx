import Layout from "../../../components/layout";
import { getAllNoteIds, getNoteData } from "../../../components/utils/notes";
import Head from "next/head";

export default function NotePage({ noteData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{noteData.title}</title>
      </Head>
      <br />
      <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllNoteIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const noteData = await getNoteData(params.id);

  return {
    props: {
      noteData,
    },
  };
}
