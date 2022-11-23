import { useRef, useState, useEffect } from "react";
import { Link as SpaLink } from "react-scroll/modules";
import Link from "next/link";
import Image from "next/image";

import { ArrowDown } from "@emotion-icons/evaicons-solid/ArrowDown";
import { AccountCircle } from "@emotion-icons/material-rounded/AccountCircle";

import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
        setLogin(false);
      } else {
        setLogin(true);
        setUsername(
          JSON.parse(localStorage.getItem("user") || "{}")?.student.fullName
        );
      }
    }
  }, []);

  const toggleNavBar = () => {
    navRef.current?.classList.toggle(`${styles.navbar__responsive}`);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <SpaLink
          className={styles.navbar__link}
          to="search"
          smooth={true}
          duration={500}
        >
          <Image
            src="/sepehr00.svg"
            alt="logo"
            width={50}
            height={50}
            className={styles.navbar__logo}
          />
        </SpaLink>
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
          <SpaLink
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            to="search"
            onClick={toggleNavBar}
            smooth={true}
            duration={500}
          >
            Home
          </SpaLink>
          <SpaLink
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            to="courses"
            onClick={toggleNavBar}
            smooth={true}
            duration={500}
          >
            Courses
          </SpaLink>
          <SpaLink
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            to="about"
            onClick={toggleNavBar}
            smooth={true}
            duration={500}
          >
            About
          </SpaLink>
        </nav>
      </div>
      {login ? (
        <div
          className={`d-flex align-items-center gap-2 ${styles.navbar__account}`}
        >
          {username}
          <AccountCircle size={25} />
        </div>
      ) : (
        <Link
          className={`${styles.navbar__link} ${styles.navbar__login}`}
          href="./login"
        >
          Log in
        </Link>
      )}
    </header>
  );
};
export default Navbar;
