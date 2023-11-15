import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./siteNavigation.module.css";

const SiteNavigation = () => {
  const router = useRouter();
  const { categoryID } = router.query;

  return (
    <ul className={styles.menu}>
      <Link href="/">
        <li
          className={`${styles.listItem} ${
            router.pathname === "/" ? styles.activeLink : ""
          }`}
        >
          home
        </li>
      </Link>
      <Link href="/category/headphones">
        <li
          className={`${styles.listItem} ${
            categoryID === "headphones" ? styles.activeLink : ""
          }`}
        >
          headphones
        </li>
      </Link>
      <Link href="/category/speakers">
        <li
          className={`${styles.listItem} ${
            categoryID === "speakers" ? styles.activeLink : ""
          }`}
        >
          speakers
        </li>
      </Link>
      <Link href="/category/earphones">
        <li
          className={`${styles.listItem} ${
            categoryID === "earphones" ? styles.activeLink : ""
          }`}
        >
          earphones
        </li>
      </Link>
    </ul>
  );
};

export default SiteNavigation;
