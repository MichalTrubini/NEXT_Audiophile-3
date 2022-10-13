import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import styles from "./addToCart.module.css";
import { IAddToCart } from "../../../../src/shared/types/types";
import CartContext from "../../../store/cart-context";

const AddToCart: React.FC<IAddToCart> = (props) => {
  const [inputQty, setInputQty] = useState(1);
  const router = useRouter();
  const { createCart } = useContext(CartContext);

  const qtyHandler = (e: any) => {
    if (e.target.id === "minusQty" && inputQty > 1)
      return setInputQty((prevValue) => prevValue - 1);
    if (e.target.id === "addQty")
      return setInputQty((prevValue) => prevValue + 1);
  };

  const inputHandler = (event: any) => {
    if (event.target.value === "") return;
    setInputQty(event.target.value);
  };

  let idItem = props.id;
  let titleOfItem = props.title;
  let shortName = props.abbrev;
  let pricePerItem = props.price;
  let imageCart = props.image;

  //reseting the input default value when user clicks on new product, i.e. the URL path changes
  useEffect(() => {
    setInputQty(1);
  }, [router]);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const cart = { id: idItem, product: titleOfItem, shortName: shortName, price: pricePerItem, qty: inputQty, image:imageCart };
    createCart(cart)

  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <p
          id="minusQty"
          className={`${styles.qtyHandler} ${styles.qtyHandlerMinus}`}
          onClick={qtyHandler}
        >
          -
        </p>
        <input
          type="number"
          className={styles.input}
          step={1}
          min={1}
          value={inputQty}
          onChange={inputHandler}
        />
        <p
          id="addQty"
          className={`${styles.qtyHandler} ${styles.qtyHandlerPlus}`}
          onClick={qtyHandler}
        >
          +
        </p>
      </div>

      <button className="button buttonLight">add to cart</button>
    </form>
  );
};

export default AddToCart;
