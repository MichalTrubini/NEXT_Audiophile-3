import styles from "./header.module.css";
import hamburger from "../../../public/assets/shared/tablet/icon-hamburger.svg";
import cart from "../../../public/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Portal from "../../shared/portal/portal";
import Cart from "../../modules/cart/cart";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import SiteNavigation from "../components/UI/siteNavigation";
import Logo from "../components/UI/logo";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [qtyInCart, setQtyInCart] = useState(0);

  const showCartHandler = () => {
    setShowCart((prevValue) => !prevValue);
    setShowMenu(false);
  };

  const showMenuHandler = () => {
    setShowMenu((prevValue) => !prevValue);
    setShowCart(false);
  };

  const { cartCtx } = useContext(CartContext);

  useEffect(() => {
    const orderedQty = cartCtx.length;
    setQtyInCart(orderedQty);
  }, [cartCtx]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.hamburgerContainer} onClick={showMenuHandler}>
            <Image src={hamburger} alt="menu" />
          </div>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <SiteNavigation />
          <div className={styles.cartContainer} onClick={showCartHandler}>
            <Image src={cart} alt="menu" />
            {qtyInCart > 0 && <div className={styles.bubble}>{qtyInCart}</div>}
          </div>
        </div>
      </header>
      {showCart && (
        <Portal selector={"#Portal"}>
          <Cart
            closeModal={() => {
              setShowCart(false);
            }}
          />
        </Portal>
      )}
      {showMenu && (
        <Portal selector={"#Portal"}>
          <MobileMenu closeModal={() => setShowMenu(false)} />
        </Portal>
      )}
    </>
  );
};

export default Header;
