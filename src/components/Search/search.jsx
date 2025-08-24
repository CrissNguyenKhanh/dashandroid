import HeadlessTippy from "@tippyjs/react/headless";
import { BiSearch } from "react-icons/bi";
import ProperWrapper from "../../layouts/components/proper/proper";
import AccountItem from "./searchHeader/accountitem/accountItemSearch";
import styles from "./search.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useEffect } from "react";
import * as SearchApi from "../../service/searchSevice";
const cx = classNames.bind(styles);

function Search() {
  // ✅ Khai báo state trong function component
  const [resultValue, setResultValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [showResult, setShowResult] = useState(true);

  const searchDebounce = useDebounce(searchValue, 500);
  const handleChange = (e) => {
    let value = e.target.value;
    // Nếu ký tự đầu tiên là space thì xóa nó
    if (value.startsWith(" ")) {
      return;
    }

    setSearchValue(value);
  };
  useEffect(() => {
    if (!searchDebounce.trim()) {
      setResultValue([]);
      return;
    }
    const fetchApi = async () => {
      const res = await SearchApi.searchApi(searchDebounce);

      setResultValue(res);
    };
    fetchApi();
  }, [searchDebounce]);
  const handleHideResult = () => {
    setShowResult(false);
  };
 console.log(resultValue);
 
  return (
    <HeadlessTippy
      interactive
      appendTo={() => document.body}
      visible={showResult && resultValue.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <ProperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {resultValue.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </ProperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={handleChange}
        />
        <BiSearch className="icon" />
      </div>
    </HeadlessTippy>
  );
}

export default Search;
