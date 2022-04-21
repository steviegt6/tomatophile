import Link from "next/link";
import GenericLayout from "../components/GenericLayout";

export default function Custom404() {
  return (
    <GenericLayout /*title="404'd!"*/>
      <h1>Error 404</h1>
      <p>Sorry! That page wasn't found. If you're sure it existed previously, it may have been moved.</p>
      <p><strong>I don't like deleting things</strong>. I don't tend to take down pages.</p>
      <p>There's a 9/10 chance that a page has just been moved. Report the missing page <a href="https://github.com/Steviegt6/tomatophile/issues">here</a>.</p>
      <br />
      <p>Consider returning <Link href="/">home</Link>.</p>
    </GenericLayout>
  );
}
