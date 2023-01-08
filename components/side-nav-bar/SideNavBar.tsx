import styles from "./SideNavBar.module.scss";
import Link from "next/link";

//import styles from "../styles/nav.css";

export default function SideNavBar() {
  return (
    <div className={styles.parent}>
    <div className={styles.child}>
      <h1 className={styles.title}>Church of God</h1>
      <h3 className={styles.subtitle}>Resources</h3>
    </div>
    <div className={styles.child}>
      <ul className={styles.link}>
        <li>
          <Link href="#">Home</Link>
          </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Give</Link>
        </li>
      </ul>
    </div>
  </div>
  );
}
