import styles from "./addToCart.module.css";

const AddToCart = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <p className={`${styles.qtyHandler} ${styles.qtyHandlerMinus}`}>-</p>
        <input
          type="number"
          className={styles.input}
          step={1}
          min={0}
          value={0}
          readOnly
        />
              <p className={`${styles.qtyHandler} ${styles.qtyHandlerPlus}`}>+</p>
      </div>

      <button className="button buttonLight">add to cart</button>
    </form>
  );
};

export default AddToCart;
