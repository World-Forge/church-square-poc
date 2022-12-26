import * as React from "react";
import styles from "./NavigationBar.module.scss";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className={styles.navigationBarContainer}>
      <div className={styles.left}>
        <Link href={"/about"}>
          <div className={styles.link}>About</div>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href={"/resources"}>
          <div className={styles.link}>Resources</div>
        </Link>
        <Link href={"/give"}>
          <div className={styles.link}>Give</div>
        </Link>
      </div>
    </div>
  );
}
