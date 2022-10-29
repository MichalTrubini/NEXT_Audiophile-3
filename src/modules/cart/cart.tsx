import styles from "./cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { iteratorSymbol } from "immer/dist/internal";

interface ICart {
  closeModal(): any;
}

const Cart: React.FC<ICart> = (props) => {
  const [inputQty, setInputQty] = useState(1);
  const { setCartCtx } = useContext(CartContext);
  const { updateCart } = useContext(CartContext);
  const { cartCtx } = useContext(CartContext);

  const qtyHandler = (e:any, id:number) => {

    //if((cartCtx.map((item:any) => item.id === id) && cartCtx.map((item:any) => item.qty === 1))) return;

    localStorage.removeItem("cart");
    const updatedCart = e.target.id === "minusQty" ? cartCtx.map((item:any) => item.id === id ? {...item, qty: item.qty -1 } : item) : cartCtx.map((item:any) => item.id === id ? {...item, qty: item.qty + 1 } : item)
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();
  };

  const inputHandler = (event: any) => {
    if (event.target.value === "") return;
    setInputQty(event.target.value);
  };

  const closeModalHandler = () => {
    props.closeModal();
  };

  const removeFromCartHandler = () => {
    localStorage.removeItem("cart");
    setCartCtx([])
  };

  const total =
  cartCtx.length > 0
      ? cartCtx
          .map((item: any) => item.price * item.qty)
          .reduce((partialSum: number, a: number) => partialSum + a, 0)
      : 0;

  return (
    <>
      <div className="overlay" onClick={closeModalHandler}></div>
      <div className={styles.cart}>
        {cartCtx.length === 0 && <p className={styles.emptyCart}>Your cart is empty.</p>}
        {cartCtx.length > 0 && (
          <>
            <div className={styles.topRow}>
              <p className={styles.cartQty}>
                cart{" "}
                <span>
                  ({cartCtx.length === 0 ? 0 : cartCtx.length})
                </span>
              </p>
              <p className={styles.cartRemove} onClick={removeFromCartHandler}>
                Remove all
              </p>
            </div>
            <div className={styles.cartProducts}>
              {cartCtx.map((item: any) => (
                <div className={styles.productItem} key={item.id}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.image}
                      alt={item.product}
                      layout="responsive"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div>
                    <p className={styles.shortname}>{item.shortName}</p>
                    <p className={styles.price}>{`$ ${item.price.toLocaleString(
                      "en-US"
                    )}`}</p>
                  </div>
                  <div className={styles.inputContainer}>
                    <p
                      id="minusQty"
                      className={`${styles.qtyHandler} ${styles.qtyHandlerMinus}`}
                      onClick={(e) => qtyHandler(e, item.id)}
                    >
                      -
                    </p>
                    <input
                      type="number"
                      className={styles.input}
                      step={1}
                      min={1}
                      value={item.qty}
                      onChange={inputHandler}
                    />
                    <p
                      id="addQty"
                      className={`${styles.qtyHandler} ${styles.qtyHandlerPlus}`}
                      onClick={(e) => qtyHandler(e, item.id)}
                    >
                      +
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.totalRow}>
              <p className={styles.text}>total</p>
              <p className={styles.total}>{`$ ${total.toLocaleString(
                "en-US"
              )}`}</p>
            </div>
            <Link href="/checkout">
              <button
                className={`button buttonLight ${styles.checkoutButton}`}
                onClick={closeModalHandler}
              >
                checkout
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
