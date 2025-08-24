import Card from "../../card";
import ContentHeader from "./contentHeader";
import styles from "../../../styles/Content.css";
import classNames from "classnames/bind";
import Teacherlist from "../../teacherlist";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("content")}>
      <ContentHeader />
      <Card />
      <Teacherlist />
    </div>
  );
}

export default Content;
