import { BiNotification, BiSearch } from "react-icons/bi";
import Search from "../../Search/search";

function ContentHeader() {
  return (
    <div className="content--header">
      <h1 className="header--title">Dashboard</h1>
      <div className="header--activity">
        <div className="search-box">
          <Search />
        </div>

        <div className="notify">
          <BiNotification className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
