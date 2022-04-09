import Head from "next/head";
import { join } from "path";
import GenericLayout from "../../../../components/GenericLayout";
import { resolveBgJsons } from "../../../../components/utils/backgroundResolver";
import {
  getAllPaths,
  getMarkdownData,
} from "../../../../components/utils/markdownEngine";
import generic from "../../../../styles/generic.module.scss";

const notesDir = join(process.cwd(), "", "modules", "notes", "documentation");

export default function NotePage({ noteData, bgJsons }: any) {
  return (
    <>
      <GenericLayout bgJsons={bgJsons} extra={<ProcessNoteData noteData={noteData} />}>
        <Head>
          <title>{noteData.title}</title>
        </Head>
        <div dangerouslySetInnerHTML={{ __html: noteData.contentHtml }} />
      </GenericLayout>
    </>
  );
}

function ProcessNoteData({ noteData }: any) {
  return (
    <div
      className={generic.container}
      style={{
        backgroundColor: "rgb(0, 0, 0, 0.9)",
        borderRadius: "6px",
        margin: "6rem auto -4rem",
      }}
    >
      <GetTitle value={noteData.title} />
      <GetLastUpdated value={noteData.lastUpdated} />
      <GetBar value={noteData} />
    </div>
  );
}

function GetBar({ value }: any) {
  const metadata: [string, string][] = [];

  if (value.entrypoint) {
    metadata.push([
      "yellowgreen",
      "This is an entrypoint article which links to other articles.",
    ]);
  }

  if (value.wip) {
    metadata.push([
      "yellow",
      "This is a work-in-progress article, and is subject to change.",
    ]);
  }

  if (value.stub) {
    metadata.push([
      "gray",
      "The article is a stub and requires more information.",
    ]);
  }

  if (value.glossary) {
    metadata.push([
      "pink",
      "The is a glossary and strictly links to other pages.",
    ]);
  }

  if (value.messy) {
    metadata.push([
      "lightcoral",
      "The article does not meet our standards and requires cleaning up.",
    ]);
  }

  const elements = metadata.map((x) => {
    return (
      <GetBarDiv
        key={x[0]}
        color={x[0]}
        width={1 / metadata.length}
        title={x[1]}
      />
    );
  });

  return (
    <div
      style={{
        height: "5px",
        width: `calc(100% + 4rem)`,
        marginTop: ".4em",
        padding: ".5em",
        paddingLeft: "0px",
        paddingRight: "0px",
        backgroundColor: "black",
        borderRadius: "6px",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {elements}
    </div>
  );
}

function GetBarDiv({ color, width, title }: any) {
  return (
    <div
      style={{
        marginTop: "-.5em",
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
        height: "100%",
        backgroundColor: color,
        width: `${width * 100}%`,
      }}
      title={title}
    />
  );
}

function GetTitle({ value }: any) {
  if (!value) return <div />;

  return <h1 style={{ marginBottom: "-2rem" }}>{value}</h1>;
}

function GetLastUpdated({ value }: any) {
  if (!value) return <div />;

  return <p>Last updated: {value}</p>;
}

export async function getStaticPaths() {
  const paths = getAllPaths(notesDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const bgJsons: string[] = resolveBgJsons();
  const noteData = await getMarkdownData(notesDir, params.id);

  return {
    props: {
      noteData,
      bgJsons,
    },
    revalidate: 1,
  };
}
