import Layout, { setHeader } from "../../../components/layout";
import { getAllNoteIds, getNoteData } from "../../../components/utils/notes";
import Head from "next/head";
import notesModule from "../../../styles/notes.module.css";
import Link from "next/link";

export default function NotePage({ noteData }) {
  setHeader(
    <p>
      <Link href="/projects/uranometrical-notes/home">
        <a>
          <code>uranometrical/notes</code>
        </a>
      </Link>{" "}
      - A comprehensive documentation project. |{" "}
      <code>
        (<a href="https://github.com/uranometrical/notes">GitHub</a>)
      </code>
    </p>
  );

  return (
    <Layout home={false}>
      <Head>
        <title>{noteData.title}</title>
      </Head>
      <GetEntrypoint value={noteData.entrypoint} />
      <GetWip value={noteData.wip} />
      <GetStub value={noteData.stub} />
      <GetGlossary value={noteData.glossary} />
      <GetMessy value={noteData.messy} />
      <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
    </Layout>
  );
}

function GetEntrypoint({ value }) {
  if (!value) return <div />;

  return (
    <div className={notesModule.fixedTopDisplay + " " + notesModule.entrypoint}>
      ! This is an entrypoint page and does not contain information.
    </div>
  );
}

function GetWip({ value }) {
  if (!value) return <div />;

  return (
    <div className={notesModule.fixedTopDisplay + " " + notesModule.wip}>
      ! This page is a work-in-progress and is subject to heavily change.
    </div>
  );
}

function GetStub({ value }) {
  if (!value) return <div />;

  return (
    <div className={notesModule.fixedTopDisplay + " " + notesModule.stub}>
      ! This page is a stub and requires more information.
    </div>
  );
}

function GetGlossary({ value }) {
  if (!value) return <div />;

  return (
    <div className={notesModule.fixedTopDisplay + " " + notesModule.glossary}>
      ! This page is a glossary and does not contain information.
    </div>
  );
}

function GetMessy({ value }) {
  if (!value) return <div />;

  return (
    <div className={notesModule.fixedTopDisplay + " " + notesModule.messy}>
      ! This page does not meet our current standards and requires cleaning up.
    </div>
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
