import styles from "./checkoutUserInfo.module.css";

const CheckoutUserInfo = () => {
  return (
    <div className={styles.addressBlock}>
      <h1 className={styles.header}>Checkout</h1>
      <form className={styles.form}>
        <div>
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

        <div>
          <h2 className={styles.title}>shiping info</h2>
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

        <div>
          <h2 className={styles.title}>payment details</h2>
          <div className={styles.paymentBlockTop}>
            <div id={styles.paymentHeader} className={`${styles.label} ${styles.marginFix}`}>
              Payment method
            </div>
            <div id={styles.paymentMoney} className={`${styles.input} ${styles.marginFix}`}>
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
      </form>
    </div>
  );
};

export default CheckoutUserInfo;
