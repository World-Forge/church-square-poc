import Link from "next/link";
import * as React from "react";
import { FB, IG, Twitter } from "../social-links";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Link
          href={"https://facebook.com"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.fb}>
            <FB />
          </div>
        </Link>
        <Link
          href={"https://instagram.com"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.ig}>
            <IG />
          </div>
        </Link>

        <Link
          href={"https://twitter.com"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.twitter}>
            <Twitter />
          </div>
        </Link>
      </div>

      <p>&copy; 2022 Church of God. All rights reserved.</p>
    </div>
  );
}
