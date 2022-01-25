import Head from "next/head";
import { join } from "path";
import { getAllPaths, getMarkdownData } from "../../../../components/utils/markdownEngine";
import generic from "../../../../styles/generic.module.scss";

const notesDir = join(process.cwd(), "", "modules", "notes", "documentation");

export default function NotePage({ noteData }: any) {
  return (
    <>
      <div className={generic.container}>
        <Head>
          <title>{noteData.tile}</title>
        </Head>
        <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
    const paths = getAllPaths(notesDir);
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }:any) {
    const noteData = await getMarkdownData(notesDir, params.id);
  
    return {
      props: {
        noteData,
      },
    };
  }