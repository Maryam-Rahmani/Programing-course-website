import { useState } from "react";

import { Search } from "@emotion-icons/boxicons-regular/Search";

import styles from "./Search.module.scss";
import { ICourse } from "../../types/ICourse";
import { GetCourseById } from "../../pages/api/services/courseById";
const SearchBox = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<ICourse>();
  const [error, setError] = useState<string>("");
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchInput(event?.target.value);
  };

  const handleClick = async () => {
    try {
      await GetCourseById(searchInput).then(
        (response) => setSearchResult(response.data.result),
        (error) => setError(error.response.data.message)
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className={`d-flex flex-column gap-3 justify-content-center align-items-center m-5 ${styles.search}`}
    >
      <div className={`input-group ${styles.search__box}`}>
        <div className="form-floating">
          <input
            type="text"
            placeholder="Search"
            className={`form-control ${styles.search__input}`}
            id="searchInput"
            onChange={handleInputChange}
          />
          <label htmlFor="searchInput" className={styles.search__input_label}>
            Search our courses by ID
          </label>
        </div>
        <button
          className={`input-group-text ${styles.search__button}`}
          onClick={handleClick}
        >
          <Search size="30" />
        </button>
      </div>
      <div>{error}</div>
    </div>
  );
};
export default SearchBox;
