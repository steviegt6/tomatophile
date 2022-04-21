import styles from "../../styles/components/footer/genericfooter.module.scss";
import GrayedPipe from "../display/GrayedPipe";

export default function GenericFooter() {
  return (
    <>
      <div className={"footer"}>
        <p>Made with&nbsp;</p>
        <p className={styles.heart}>&lt;3</p>
        <p>&nbsp;(Maybe)</p>
        <GrayedPipe />
        <p>
          Open-source on{" "}
          <a href="https://github.com/Steviegt6/tomatophile">GitHub</a>
        </p>
      </div>
    </>
  );
}
