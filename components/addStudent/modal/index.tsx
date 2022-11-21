import { useEffect, useState } from "react";

import styles from "./Modal.module.scss";
import Enrollment from "../enrollment";

export interface IModalProp {
  close: (value: boolean) => void;
}

const ModalWrapper = ({ close }: IModalProp): JSX.Element => {
  const [login, setLogin] = useState<boolean>(false);
  useEffect(() => {
    localStorage.getItem("userId") === null ? setLogin(false) : setLogin(true);
  }, []);
  return (
    <div className={styles.modal}>
      <div className={styles.modal__box}>
        <span className={styles.modal__close} onClick={() => close(false)}>
          &times;
        </span>
        <div className={styles.modal__content}>
          {login ? <Enrollment /> : "<Login/>"}
        </div>
      </div>
    </div>
  );
};
export default ModalWrapper;
