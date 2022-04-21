import styles from "../../styles/components/display/grayedpipe.module.scss";
import { getClasses } from "../utilities/stringsAreAnnoying";

export default function GrayedPipe({ className = "" }) {
    return <p className={getClasses(styles.pipe, className)}>&nbsp;|&nbsp;</p>;
}