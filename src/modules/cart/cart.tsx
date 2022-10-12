import styles from "./cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import Image from "next/image";
const Cart = () => {
  const { cartCtx } = useContext(CartContext);

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.cart}>
        <div className={styles.topRow}>
          <p className={styles.cartQty}>
            cart<span>(3)</span>
          </p>
          <p className={styles.cartRemove}>Remove all</p>
        </div>
        <div>
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
                <p>{item.shortName}</p>
                <p>{`$ ${item.price.toLocaleString("en-US")}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
