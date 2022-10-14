import styles from "./cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ICart {
  closeModal():any;
}

const Cart:React.FC<ICart> = (props) => {
  const { cartCtx } = useContext(CartContext);
  const [inputQty, setInputQty] = useState(1);

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

  const closeModalHandler = () => {
    props.closeModal()
  }

  return (
    <>
      <div className='overlay'></div>
      <div className={styles.cart}>
        <div className={styles.topRow}>
          <p className={styles.cartQty}>
            cart <span>(3)</span>
          </p>
          <p className={styles.cartRemove}>Remove all</p>
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
                <p className={styles.price}>{`$ ${item.price.toLocaleString("en-US")}`}</p>
              </div>
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
            </div>
          ))}
        </div>
        <div className={styles.totalRow}>
          <p className={styles.text}>
            total
          </p>
          <p className={styles.total}>$5,396</p>
        </div>
        <Link href='/checkout'><button className={`button buttonLight ${styles.checkoutButton}`} onClick={closeModalHandler}>checkout</button></Link>
      </div>
    </>
  );
};

export default Cart;
