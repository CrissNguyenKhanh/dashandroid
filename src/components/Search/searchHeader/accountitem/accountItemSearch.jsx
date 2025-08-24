import classNames from "classnames/bind";
import styles from "./accountItem.module.scss";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.image} alt={data.username} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.fullName}</span>
      
        </h4>
        <span className={cx("username")}>{data.username}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
