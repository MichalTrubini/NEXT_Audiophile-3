import styles from "./orderSummary.module.css";
import checkmark from "../../../public/assets/checkout/icon-order-confirmation.svg";
import Image from "next/image";
import Link from "next/link";
import example from "../../../public/assets/cart/image-xx59-headphones.jpg";

interface IModal {
  closeModal(): any;
}

const OrderSummary: React.FC<IModal> = (props) => {
  return (
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
                <Image src={example} alt="example" />
              </div>
              <div className={styles.productinfo}>
                <div>
                  <p className={styles.productName}>XX99 MK II</p>
                  <p className={styles.priceTag}>$ 2,999</p>
                </div>
                <div className={styles.qty}>
                  <p className={styles.qtyTag}>x1</p>
                </div>
              </div>
            </div>
            <p className={styles.other}>and 2 other item(s)</p>
          </div>
          <div className={styles.total}>
            <p className={styles.totalGrand}>grand total</p>
            <p className={styles.totalPrice}>$ 5,446</p>
          </div>
        </div>
        <Link href="/">
          <p className={`button buttonLight ${styles.button}`}>back to home</p>
        </Link>
      </div>
    </>
  );
};

export default OrderSummary;
