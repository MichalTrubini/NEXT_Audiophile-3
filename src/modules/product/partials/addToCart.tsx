import { useContext } from "react";
import styles from "./addToCart.module.css";
import { IAddToCart } from "../../../../src/shared/types/types";
import CartContext from "../../../store/cart-context";
import InputItem from "../../../shared/components/UI/input";

const AddToCart: React.FC<IAddToCart> = (props) => {
  const inputQty = 1
  const { createCart } = useContext(CartContext);

  const enteredQty = () => {

  }

  let idItem = props.id;
  let titleOfItem = props.title;
  let shortName = props.abbrev;
  let pricePerItem = props.price;
  let imageCart = props.image;

  const submitHandler = (event: any) => {
    event.preventDefault();

    const cart = { id: idItem, product: titleOfItem, shortName: shortName, price: pricePerItem, qty: inputQty, image:imageCart };
    createCart(cart)

  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <InputItem enteredQty={enteredQty}/>
      <button className="button buttonLight">add to cart</button>
    </form>
  );
};

export default AddToCart;
