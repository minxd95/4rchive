"use client";

import images from "@/assets/images";
import styles from "./ThemeToggle.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  return (
    <button
      className={styles.themeToggle}
      onClick={() =>
        setTheme((prev) => {
          if (prev === "light") return "dark";
          return "light";
        })
      }
    >
      <Image
        src={images.moon}
        alt="moon icon"
        width={16}
        height={16}
        className={styles.moonIcon}
      />
      <Image
        src={images.sun}
        alt="sun icon"
        width={20}
        height={20}
        className={styles.sunIcon}
      />
      <div
        className={`${styles.bigDot} ${
          theme === "dark" ? styles.bigDotDark : styles.bigDotLight
        }`}
      />
    </button>
  );
}
