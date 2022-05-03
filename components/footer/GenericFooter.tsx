import styles from "../../styles/components/footer/genericfooter.module.scss";

export default function GenericFooter() {
  return (
    <div className="flexible">
        <p>Made with&nbsp;</p>
        <p className={styles.heart}>&lt;3</p>
        <p>&nbsp;(Maybe)</p>
    </div>
  );
}
