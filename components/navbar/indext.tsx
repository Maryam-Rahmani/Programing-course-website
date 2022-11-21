import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowDown } from "@emotion-icons/evaicons-solid/ArrowDown";

import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);

  const toggleNavBar = () => {
    navRef.current?.classList.toggle(`${styles.navbar__responsive}`);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Link className={styles.navbar__link} href="/">
          <Image
            src="/sepehr00.svg"
            alt="logo"
            width={50}
            height={50}
            className={styles.navbar__logo}
          />
        </Link>
        <button
          className={`${styles.navbar__link} ${styles.navbar__burger}`}
          onClick={toggleNavBar}
        >
          Menu
          <ArrowDown size={15} />
        </button>
        <nav ref={navRef} className={`${styles.navbar__links}`}>
          <span
            className={`${styles.navbar__burger_close}`}
            onClick={toggleNavBar}
          >
            &times;
          </span>
          <Link
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            href="/"
            onClick={toggleNavBar}
          >
            Home
          </Link>
          <Link
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            href="/courses"
            onClick={toggleNavBar}
          >
            Courses
          </Link>
          <Link
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            href="/about"
            onClick={toggleNavBar}
          >
            About
          </Link>
        </nav>
      </div>
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
