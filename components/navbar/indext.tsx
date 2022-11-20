import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Navbar.module.scss";

const Navbar = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <Link className={styles.navbar__link} href="/">
          <Image
            src="/sepehr00.svg"
            alt="logo"
            width={50}
            height={50}
            className={styles.navbar__logo}
          />
        </Link>
        <Link className={styles.navbar__link} href="/">
          Home
        </Link>
        <Link className={styles.navbar__link} href="/courses">
          Courses
        </Link>
        <Link className={styles.navbar__link} href="/about">
          About
        </Link>
      </div>
      <Link
        className={`${styles.navbar__link} ${styles.navbar__login}`}
        href="/login"
      >
        Log in
      </Link>
    </div>
  );
};
export default Navbar;
