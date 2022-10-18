import styles from "./checkoutDetails.module.css";
import Image from "next/image";
import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import Portal from "../../shared/portal/portal";
import OrderSummary from "./orderSummary";

const CheckoutDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartCtx } = useContext(CartContext);
  const modalHandler = (event: any) => {
    event.preventDefault();

    setShowModal((prevValue) => true);
  };

  const total =
    cartCtx.length > 0
      ? cartCtx
          .map((item: any) => item.price * item.qty)
          .reduce((partialSum: number, a: number) => partialSum + a, 0)
      : 0;

  const shippingCost = 50;
  const VAT = 0.2;

  return (
    <>
      <form className={styles.form}>
        <div className={styles.block}>
          <h1 className={styles.header}>Checkout</h1>

          <div className={styles.billing}>
            <h2 className={styles.title}>billing details</h2>
            <div className={`${styles.grid} ${styles.gridOne}`}>
              <div>
                <label className={styles.label} htmlFor="name">
                  Name
                </label>
                <input className={styles.input} id="name" />
              </div>
              <div>
                <label className={styles.label} htmlFor="email">
                  Email Address
                </label>
                <input className={styles.input} type="email" id="email" />
              </div>
              <div>
                <label className={styles.label} htmlFor="phone">
                  Phone Number
                </label>
                <input className={styles.input} id="phone" />
              </div>
            </div>
          </div>

          <div className={styles.shipping}>
            <h2 className={styles.title}>shipping info</h2>
            <div className={`${styles.grid} ${styles.gridTwo}`}>
              <div id={styles.addressBlock}>
                <label className={styles.label} htmlFor="address">
                  Your Address
                </label>
                <input className={styles.input} id="address" />
              </div>
              <div id={styles.zipBlock}>
                <label className={styles.label} htmlFor="zip">
                  Zip Code
                </label>
                <input className={styles.input} id="zip" />
              </div>
              <div id={styles.cityBlock}>
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input className={styles.input} id="city" />
              </div>
              <div id={styles.countryBlock}>
                <label className={styles.label} htmlFor="country">
                  Country
                </label>
                <input className={styles.input} id="country" />
              </div>
            </div>
          </div>

          <div className={styles.payment}>
            <h2 className={styles.title}>payment details</h2>
            <div className={styles.paymentBlockTop}>
              <div
                id={styles.paymentHeader}
                className={`${styles.label} ${styles.marginFix}`}
              >
                Payment method
              </div>
              <div
                id={styles.paymentMoney}
                className={`${styles.input} ${styles.marginFix}`}
              >
                <input
                  className={styles.inputTwo}
                  type="radio"
                  name="payment"
                  value="e-Money"
                  id="cardPayment"
                />
                <label className={styles.labelTwo} htmlFor="cardPayment">
                  E-Money
                </label>
              </div>
              <div id={styles.paymentCOD} className={styles.input}>
                <input
                  className={styles.inputTwo}
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  id="COD"
                />
                <label className={styles.labelTwo} htmlFor="COD">
                  Cash On delivery
                </label>
              </div>
            </div>
            <div className={styles.paymentBlockTwo}>
              <div>
                <label className={styles.label}>e-Money Number</label>
                <input className={styles.input} />
              </div>
              <div>
                <label className={styles.label}>e-Money PIN</label>
                <input className={styles.input} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.block} ${styles.summary}`}>
          <h2 className={styles.summaryHeader}>summary</h2>
          <div className={styles.products}>
            {cartCtx.map((item: any) => (
              <div className={styles.product} key={item.id}>
                <div className={styles.imageContainer}>
                  <Image src={item.image} alt="example" layout="fill" />
                </div>
                <div className={styles.productinfo}>
                  <div>
                    <p className={styles.productName}>{item.shortName}</p>
                    <p className={styles.priceTag}>
                      $ {item.price.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className={styles.qty}>
                    <p className={styles.qtyTag}>x{item.qty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.subtotal}>
            <p className={styles.subtotalLeft}>total</p>
            <p className={styles.subtotalRight}>
              $ {total.toLocaleString("en-US")}
            </p>
          </div>
          <div className={styles.subtotal}>
            <p className={styles.subtotalLeft}>shipping</p>
            <p className={styles.subtotalRight}>$ {shippingCost}</p>
          </div>
          <div className={styles.subtotal}>
            <p className={styles.subtotalLeft}>vat (included)</p>
            <p className={styles.subtotalRight}>$ {Math.round(total * VAT)}</p>
          </div>
          <div className={styles.total}>
            <p className={styles.subtotalLeft}>grand total</p>
            <p className={styles.totalRight}>
              $ {(total + shippingCost).toLocaleString("en-US")}
            </p>
          </div>
          <button
            className={`button buttonLight ${styles.button}`}
            onClick={modalHandler}
          >
            continue & pay
          </button>
        </div>
      </form>
      <Portal selector={"#Portal"}>
        {showModal && (
          <OrderSummary
            closeModal={() => {
              setShowModal(false);
            }}
          />
        )}
      </Portal>
    </>
  );
};

export default CheckoutDetails;
