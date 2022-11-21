import { useState } from "react";

import styles from "./Enrollment.module.scss";
import { AddStudentToCourse } from "../../../pages/api/services/addStudent";

const Enrollment = (): JSX.Element => {
  const [message, setMessage] = useState<string>("");
  const userId = localStorage.getItem("userId");
  const enroll = async () => {
    try {
      await AddStudentToCourse(userId, courseID).then(
        (response) => setMessage(response.data.message),
        (error) => setMessage(error.response.data.message)
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.enrollment}>
      <div>
        Course name : <span className={styles.enrollment__text}></span>
      </div>
      <div>
        Cost :<span className={styles.enrollment__text}></span>
      </div>
      <button onClick={enroll} className={styles.enrollment__button}>
        Enroll
      </button>
    </div>
  );
};
export default Enrollment;
