import styles from "./footer.module.css";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../public/assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../public/assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../public/assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="audiophile" />
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

        <p className={styles.about}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
        <div className={styles.socialBlock}>
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
