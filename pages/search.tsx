import { useState } from "react";

import { Search } from "@emotion-icons/boxicons-regular/Search";

import styles from "../styles/Search.module.scss";
import { ICourse } from "../types/types";
import AllCoursesAPI from "../components/Allcourses/AllcoursesAPI";

const SearchBox = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [courses, setCourses] = useState([]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchInput(event?.target.value);
  };

  const handleSearch = () => {
    AllCoursesAPI().then((response: any) => setCourses(response.data.result));
    const filtered = courses.filter((course: ICourse) => {
      return searchInput === "" ? course : course.title.includes(searchInput);
    });
    localStorage.setItem("allCourses", JSON.stringify(filtered));
  };

  return (
    <div
      className={`d-flex flex-column gap-3 justify-content-center align-items-center m-5 ${styles.search}`}
      id="search"
    >
      <div className={`input-group ${styles.search__box}`}>
        <div className="form-floating">
          <input
            type="text"
            placeholder="Search"
            className={`form-control ${styles.search__input}`}
            id="searchInput"
            onChange={handleInputChange}
            onInput={handleSearch}
          />
          <label htmlFor="searchInput" className={styles.search__input_label}>
            Search our courses
          </label>
        </div>
        <button
          className={`input-group-text ${styles.search__button}`}
          onClick={handleSearch}
        >
          <Search size="30" />
        </button>
      </div>
    </div>
  );
};
export default SearchBox;
