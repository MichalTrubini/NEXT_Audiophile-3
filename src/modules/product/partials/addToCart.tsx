import { useState } from "react";
import styles from "./addToCart.module.css";

const AddToCart = () => {

  const [inputQty, setInputQty] = useState(1);

  const qtyHandler = (e:any) => {
    if (e.target.id ==='minusQty' && inputQty > 1) return setInputQty(prevValue => prevValue - 1)
    if (e.target.id ==='addQty') return setInputQty(prevValue => prevValue + 1)
  }

  const inputHandler = (event:any) => {
    if(event.target.value === '') return;
    setInputQty(event.target.value)
  }

  console.log(inputQty)
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <p id='minusQty' className={`${styles.qtyHandler} ${styles.qtyHandlerMinus}`} onClick={qtyHandler}>-</p>
        <input
          type="number"
          className={styles.input}
          step={1}
          min={1}
          value={inputQty}
          onChange={inputHandler}
        />
        <p id='addQty' className={`${styles.qtyHandler} ${styles.qtyHandlerPlus}`} onClick={qtyHandler}>+</p>
      </div>

      <button className="button buttonLight">add to cart</button>
    </form>
  );
};

export default AddToCart;
