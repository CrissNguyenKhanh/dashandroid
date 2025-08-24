
import Sidebar from "../../components/sidebar";
import classNames from "classnames/bind";
import styles from "./default.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("dashboard")}>
      <Sidebar />
      <div className={cx("dashboard--content")}>
        {children}
  
      </div>
    </div>
  );
}

export default DefaultLayout;
