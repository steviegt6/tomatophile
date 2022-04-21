import { join } from "path";
import GenericLayout from "../../components/GenericLayout";
import {
  getAllPaths,
  getMarkdownData,
} from "../../components/utils/markdownEngine";

const wikiDir = join(process.cwd(), "", "modules", "wiki", "documentation");

export default function WikiPage({ wikiData }: any) {
  return (
    <GenericLayout>
      <div
        className="align-left"
        dangerouslySetInnerHTML={{ __html: wikiData.contentHtml }}
      />
    </GenericLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPaths(wikiDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const wikiData = await getMarkdownData(wikiDir, params.id);

  return {
    props: {
      wikiData,
    },
  };
}
