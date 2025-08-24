import styles from "./proper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProperWrapper({ className, children }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default ProperWrapper;
