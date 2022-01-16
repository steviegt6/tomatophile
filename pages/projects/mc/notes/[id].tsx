export default function NotePage({ noteData }) {

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