import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import styles from "./addToCart.module.css";
import { IAddToCart } from "../../../../src/shared/types/types";
import CartContext from "../../../store/cart-context";

const AddToCart: React.FC<IAddToCart> = (props) => {
  const [inputQty, setInputQty] = useState(1);
  const router = useRouter();
  const { updateCart, cartCtx } = useContext(CartContext);

  const qtyHandler = (e: any) => {
    if (e.target.id === "minusQty" && inputQty > 1) return setInputQty((prevValue) => prevValue - 1);
    if (e.target.id === "addQty") return setInputQty((prevValue) => prevValue + 1);
  };

  const inputHandler = (event: any) => {
    setInputQty(event.target.value.trim());
  };

  //reseting the input default value when user clicks on new product, i.e. the URL path changes
  useEffect(() => {
    setInputQty(1);
  }, [router]);

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (inputQty + 0 == 0) return;

    const currentCart = {
      id: props.id,
      product: props.title,
      shortName: props.abbrev,
      price: props.price,
      qty: inputQty,
      image: props.image,
    };

    updateCart();

    const alreadyInCart = cartCtx.find((x: any) => x.id === currentCart.id);

    if (cartCtx.length > 0) {
      //in this case, there are already products in the cart
      if (alreadyInCart === undefined) {
        //if product with a given ID is not already in the cart => adding new product into the cart
        localStorage.setItem("cart", JSON.stringify(cartCtx.concat(currentCart)));
      } else {
        //if product with a given ID is already in the cart => sending previous cart content into the local storage with updated qty
        localStorage.removeItem("cart");

        const updatedCart = cartCtx.map((item: any) =>
          item.id == alreadyInCart.id ? { ...item, qty: item.qty + currentCart.qty } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } else {
      //if nothing is in the cart, then add current cart
      localStorage.setItem("cart", JSON.stringify([currentCart]));
    }

    setInputQty(1);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.inputContainer}>
        <p id="minusQty" className={`${styles.qtyHandler} ${styles.qtyHandlerMinus}`} onClick={qtyHandler}>
          -
        </p>
        <input type="number" className={styles.input} value={inputQty} onChange={inputHandler} />
        <p id="addQty" className={`${styles.qtyHandler} ${styles.qtyHandlerPlus}`} onClick={qtyHandler}>
          +
        </p>
      </div>

      <button className="button buttonLight">add to cart</button>
    </form>
  );
};

export default AddToCart;
