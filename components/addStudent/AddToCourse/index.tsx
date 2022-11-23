import { useState, useEffect } from "react";
import Router from "next/router";

import styles from "./AddToCourse.module.scss";
import { ICourse } from "../../../types/types";
import ModalWrapper from "../modal";

const AddToCourse = ({ course }: ICourse): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  useEffect(() => {
    localStorage.getItem("user") === null ? setLogin(false) : setLogin(true);
  }, []);

  const handleEnrollment = () => {
    login ? setIsOpen(!isOpen) : Router.push("/login");
  };
  return (
    <div>
      <button
        className={`btn rounded-pill p-2 ${styles.button}`}
        onClick={handleEnrollment}
      >
        Enroll
      </button>
      {isOpen && <ModalWrapper close={setIsOpen} course={course} />}
    </div>
  );
};
export default AddToCourse;
