import Content from "../Search/searchHeader/content";
import Profile from "../profile";
import styles from "./comp1.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Compent1() {
  return (
    <div className={cx("dashboard--content")}>
      <Content />
      <Profile />
    </div>
  );
}

export default Compent1;
