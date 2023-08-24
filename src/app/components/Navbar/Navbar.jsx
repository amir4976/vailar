import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import {RxHamburgerMenu} from 'react-icons/rx'


export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
}

export default async function Navbar(props) {
  return (
    <div className={styles.NavbarContainer}>
      <div className={`container ${styles.Navbar}`}>
        <div className={styles.hamburgerMenu}><RxHamburgerMenu/></div>
        <div className={styles.navbarLeftSide}>
          <div className={styles.logo}>
            <Image src="/logo.png" width={160} height={50} />
          </div>
          <ul className={styles.navbarUl}>
            <li>صفحه اصلی</li>
            <li>خدمات ما</li>
            <li>پروژه ها</li>
            <li>سوال های متداول</li>
            <li>وبلاگ</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        <div className={styles.NavbarRightSide}>
          <AiOutlineUser />
          <CiSearch />
        </div>
      </div>
    </div>
  );
}
