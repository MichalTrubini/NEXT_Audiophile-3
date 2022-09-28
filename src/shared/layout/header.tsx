import styles from "./header.module.css";
import hamburger from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import cart from "../../../public/assets/shared/desktop/icon-cart.svg";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hamburgerContainer}>
          <Image src={hamburger} alt="menu" />
        </div>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="menu" />
        </div>
        <ul className={styles.menu}>
          <Link href="/">
            <li className={styles.listItem}>home</li>
          </Link>
          <Link href="/category/headphones">
            <li className={styles.listItem}>headphones</li>
          </Link>
          <Link href="/category/speakers">
            <li className={styles.listItem}>speakers</li>
          </Link>
          <Link href="/category/earphones">
            <li className={styles.listItem}>earphones</li>
          </Link>
        </ul>
        <div className={styles.cartContainer}>
          <Image src={cart} alt="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
