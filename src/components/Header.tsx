"use server";

import { inter } from "@/assets/fonts";
import styles from "./Header.module.scss";
import Link from "next/link";
import images from "@/assets/images";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default async function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <span className={`${inter.className} ${styles.title}`}>
            4rchive :)
          </span>
        </Link>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/search">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.searchButton}>
          <Image src={images.search} alt="search icon" width={20} height={20} />
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
}
