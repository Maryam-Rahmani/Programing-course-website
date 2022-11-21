import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const [burgerNav, setBurgerNav] = useState<boolean>(false)
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__links}>
        <Link className={styles.navbar__link} href="/">
          <Image
            src="/sepehr00.svg"
            alt="logo"
            width={50}
            height={50}
            className={styles.navbar__logo}
          />
        </Link>
        <Link
          className={`${styles.navbar__link} ${styles.navbar__item}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.navbar__link} ${styles.navbar__item}`}
          href="/courses"
        >
          Courses
        </Link>
        <Link
          className={`${styles.navbar__link} ${styles.navbar__item}`}
          href="/about"
        >
          About
        </Link>
      </nav>
      <Link
        className={`${styles.navbar__link} ${styles.navbar__login}`}
        href="/login"
      >
        Log in
      </Link>
    </header>
  );
};
export default Navbar;
