import { useState } from "react";

import styles from "./AddToCourse.module.scss";
import ModalWrapper from "../modal";

const AddToCourse = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleEnrollment = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className={`btn rounded-pill p-2 ${styles.button}`}
        onClick={handleEnrollment}
      >
        Enroll
      </button>
      {isOpen && <ModalWrapper close={setIsOpen} />}
    </div>
  );
};
export default AddToCourse;
