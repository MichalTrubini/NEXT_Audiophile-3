import styles from "./header.module.css";
import hamburger from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import logo from "../../../public/assets/shared/desktop/logo.svg";
import cart from "../../../public/assets/shared/desktop/icon-cart.svg";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Portal from "../../shared/portal/portal";
import Cart from "../../modules/cart/cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevValue) => !prevValue);
  };

  const { cartCtx } = useContext(CartContext);

  const orderedQty = cartCtx
    .map((item: any) => item.qty)
    .reduce((partialSum: number, a: number) => partialSum + a, 0);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.hamburgerContainer}>
            <Image src={hamburger} alt="menu" />
          </div>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a>
                <Image src={logo} alt="audiophile" />
              </a>
            </Link>
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
          <div className={styles.cartContainer} onClick={showCartHandler}>
            <Image src={cart} alt="menu" />
            {orderedQty > 0 && (
              <div className={styles.bubble}>{orderedQty}</div>
            )}
          </div>
        </div>
      </header>
      <Portal selector={"#Portal"}>{showCart && <Cart />}</Portal>
    </>
  );
};

export default Header;
