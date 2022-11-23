import styles from "./Modal.module.scss";
import { ICourse } from "../../../types/types";
import Enrollment from "../enrollment";

export interface IModalProp {
  close: (value: boolean) => void;
  course: ICourse;
}

const ModalWrapper = ({ close, course }: IModalProp): JSX.Element => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__box}>
        <span className={styles.modal__close} onClick={() => close(false)}>
          &times;
        </span>
        <div className={styles.modal__content}>
          <Enrollment course={course} />
        </div>
      </div>
    </div>
  );
};
export default ModalWrapper;
