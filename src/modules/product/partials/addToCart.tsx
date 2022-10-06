import styles from "./addToCart.module.css";

const AddToCart = () => {
  return (
    <form className={styles.form}>
      <input type="number" className={styles.input} />
      <button className="button buttonLight">add to cart</button>
    </form>
  );
};

export default AddToCart;
