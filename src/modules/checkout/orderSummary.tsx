import styles from "./orderSummary.module.css";
import checkmark from "../../../public/assets/checkout/icon-order-confirmation.svg";
import Image from "next/image";
import Link from "next/link";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

interface IModal {
  closeModal(): any;
}

const OrderSummary: React.FC<IModal> = (props) => {
  const { cartCtx } = useContext(CartContext);
  const { setCartCtx } = useContext(CartContext);

  const total =
    cartCtx.length > 0
      ? cartCtx
          .map((item: any) => item.price * item.qty)
          .reduce((partialSum: number, a: number) => partialSum + a, 0)
      : 0;

  const clearCartHandler = () => {
    localStorage.removeItem("cart");
    setCartCtx([]);
  };

  return (
    <>
      {cartCtx.length > 0 && (
        <>
          <div className="overlay"></div>
          <div className={styles.summary}>
            <div className={styles.imageContainer}>
              <Image src={checkmark} alt="checkmark" />
            </div>
            <h2 className={styles.header}>
              thank you
              <br /> for your order
            </h2>
            <p className={styles.message}>
              You will receive an email confirmation shortly.
            </p>
            <div className={styles.table}>
              <div className={styles.products}>
                <div className={styles.product}>
                  <div className={styles.imageContainerProduct}>
                    <Image src={cartCtx[0].image} alt="example" layout="fill" />
                  </div>
                  <div className={styles.productinfo}>
                    <div>
                      <p className={styles.productName}>
                        {cartCtx[0].shortName}
                      </p>
                      <p className={styles.priceTag}>
                        $ {cartCtx[0].price.toLocaleString("en-US")}
                      </p>
                    </div>
                    <div className={styles.qty}>
                      <p className={styles.qtyTag}>x{cartCtx[0].qty}</p>
                    </div>
                  </div>
                </div>
                {cartCtx.length > 1 && (
                  <p className={styles.other}>
                    and {cartCtx.length} other item(s)
                  </p>
                )}
              </div>
              <div className={styles.total}>
                <p className={styles.totalGrand}>grand total</p>
                <p className={styles.totalPrice}>
                  $ {total.toLocaleString("en-US")}
                </p>
              </div>
            </div>
            <Link href="/">
              <p
                className={`button buttonLight ${styles.button}`}
                onClick={clearCartHandler}
              >
                back to home
              </p>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default OrderSummary;
