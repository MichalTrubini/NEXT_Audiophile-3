import styles from "./checkoutDetails.module.css";
import Image from "next/image";
import { useState, useContext, useReducer } from "react";
import CartContext from "../../store/cart-context";
import Portal from "../../shared/portal/portal";
import OrderSummary from "./orderSummary";

const initialState = {
  name: "",
  nameBlank: false,
  email: "",
  emailBlank: false,
  phone: "",
  phoneBlank: false,
  address: "",
  addressBlank: false,
  zip: "",
  zipBlank: false,
  city: "",
  cityBlank: false,
  country: "",
  countryBlank: false,
  eMoneyNumber: "",
  eMoneyNumberBlank: false,
  eMoneyPin: "",
  eMoneyPinBlank: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "nameBlank":
      return { ...state, nameBlank: action.value };
    case "email":
      return { ...state, email: action.value };
    case "emailBlank":
      return { ...state, emailBlank: action.value };
    case "phone":
      return { ...state, phone: action.value };
    case "phoneBlank":
      return { ...state, phoneBlank: action.value };
    case "address":
      return { ...state, address: action.value };
    case "addressBlank":
      return { ...state, addressBlank: action.value };
    case "zip":
      return { ...state, zip: action.value };
    case "zipBlank":
      return { ...state, zipBlank: action.value };
    case "city":
      return { ...state, city: action.value };
    case "cityBlank":
      return { ...state, cityBlank: action.value };
    case "country":
      return { ...state, country: action.value };
    case "countryBlank":
      return { ...state, countryBlank: action.value };
    case "eMoneyNumber":
      return { ...state, eMoneyNumber: action.value };
    case "eMoneyNumberBlank":
      return { ...state, eMoneyNumberBlank: action.value };
    case "eMoneyPin":
      return { ...state, eMoneyPin: action.value };
    case "eMoneyPinBlank":
      return { ...state, eMoneyPinBlank: action.value };
    default:
      return state;
  }
};

const CheckoutDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartCtx } = useContext(CartContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formError, setFormError] = useState(false);

  console.log(state, formError);

  const modalHandler = (event: any) => {
    event.preventDefault();
    if (formError === true) return;
    setShowModal((prevValue) => true);
  };

  const total =
    cartCtx.length > 0
      ? cartCtx.map((item: any) => item.price * item.qty).reduce((partialSum: number, a: number) => partialSum + a, 0)
      : 0;

  const shippingCost = 50;
  const VAT = 0.2;

  const formValidation = () => {
    if (state.name === "") dispatch({ type: "nameBlank", value: true });
    if (state.email === "") dispatch({ type: "emailBlank", value: true });
    if (state.phone === "") dispatch({ type: "phoneBlank", value: true });
    if (state.address === "") dispatch({ type: "addressBlank", value: true });
    if (state.zip === "") dispatch({ type: "zipBlank", value: true });
    if (state.city === "") dispatch({ type: "cityBlank", value: true });
    if (state.country === "") dispatch({ type: "countryBlank", value: true });
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    formValidation();
    //setShowModal((prevValue) => true);
  };

  return (
    <>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles.block}>
          <h1 className={styles.header}>Checkout</h1>

          <div className={styles.billing}>
            <h2 className={styles.title}>billing details</h2>
            <div className={`${styles.grid} ${styles.gridOne}`}>
              <div>
                <label
                  className={state.nameBlank ? `${styles.label} ${styles.labelError}` : styles.label}
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className={state.nameBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="name"
                  onChange={(event) => {
                    dispatch({ type: "name", value: event?.target.value });
                    dispatch({ type: "nameBlank", value: false });
                  }}
                />
              </div>
              <div>
                <label
                  className={state.emailBlank ? `${styles.label} ${styles.labelError}` : styles.label}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={state.emailBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  type="email"
                  id="email"
                  onChange={(event) => {
                    dispatch({ type: "email", value: event?.target.value });
                    dispatch({ type: "emailBlank", value: false });
                  }}
                />
              </div>
              <div>
                <label
                  className={state.phoneBlank ? `${styles.label} ${styles.labelError}` : styles.label}
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className={state.phoneBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="phone"
                  onChange={(event) => {
                    dispatch({ type: "phone", value: event?.target.value });
                    dispatch({ type: "phoneBlank", value: false });
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.shipping}>
            <h2 className={styles.title}>shipping info</h2>
            <div className={`${styles.grid} ${styles.gridTwo}`}>
              <div id={styles.addressBlock}>
                <label
                  className={state.addressBlank ? `${styles.label} ${styles.labelError}` : styles.label}
                  htmlFor="address"
                >
                  Your Address
                </label>
                <input
                  className={state.addressBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="address"
                  onChange={(event) => {
                    dispatch({ type: "address", value: event?.target.value });
                    dispatch({ type: "addressBlank", value: false });
                  }}
                />
              </div>
              <div id={styles.zipBlock}>
                <label className={state.zipBlank ? `${styles.label} ${styles.labelError}` : styles.label} htmlFor="zip">
                  Zip Code
                </label>
                <input
                 className={state.zipBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="zip"
                  onChange={(event) => {
                    dispatch({ type: "zip", value: event?.target.value });
                    dispatch({ type: "zipBlank", value: false });
                  }}
                />
              </div>
              <div id={styles.cityBlock}>
                <label
                  className={state.cityBlank ? `${styles.label} ${styles.labelError}` : styles.label}
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className={state.cityBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="city"
                  onChange={(event) => {
                    dispatch({ type: "city", value: event?.target.value });
                    dispatch({ type: "cityBlank", value: false });
                  }}
                />
              </div>
              <div id={styles.countryBlock}>
                <label
                  className={state.countryBlank ? `${styles.label} ${styles.labelError}` : styles.label}
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className={state.countryBlank ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="country"
                  onChange={(event) => {
                    dispatch({ type: "country", value: event?.target.value });
                    dispatch({ type: "countryBlank", value: false });
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.payment}>
            <h2 className={styles.title}>payment details</h2>
            <div className={styles.paymentBlockTop}>
              <div id={styles.paymentHeader} className={`${styles.label} ${styles.marginFix}`}>
                Payment method
              </div>
              <div id={styles.paymentMoney} className={`${styles.input} ${styles.marginFix}`}>
                <input className={styles.inputTwo} type="radio" name="payment" value="e-Money" id="cardPayment" />
                <label className={styles.labelTwo} htmlFor="cardPayment">
                  E-Money
                </label>
              </div>
              <div id={styles.paymentCOD} className={styles.input}>
                <input className={styles.inputTwo} type="radio" name="payment" value="Cash on Delivery" id="COD" />
                <label className={styles.labelTwo} htmlFor="COD">
                  Cash On delivery
                </label>
              </div>
            </div>
            <div className={styles.paymentBlockTwo}>
              <div>
                <label className={styles.label}>e-Money Number</label>
                <input
                  className={styles.input}
                  onChange={(event) =>
                    dispatch({
                      type: "eMoneyNumber",
                      value: event?.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className={styles.label}>e-Money PIN</label>
                <input
                  className={styles.input}
                  onChange={(event) => dispatch({ type: "eMoneyPin", value: event?.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.block} ${styles.summary}`}>
          <h2 className={styles.summaryHeader}>summary</h2>
          <div className={styles.products}>
            {cartCtx.map((item: any) => (
              <div className={styles.product} key={item.id}>
                <div className={styles.imageContainer}>
                  <Image src={item.image} alt="example" layout="fill" />
                </div>
                <div className={styles.productinfo}>
                  <div>
                    <p className={styles.productName}>{item.shortName}</p>
                    <p className={styles.priceTag}>$ {item.price.toLocaleString("en-US")}</p>
                  </div>
                  <div className={styles.qty}>
                    <p className={styles.qtyTag}>x{item.qty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.subtotal}>
            <p className={styles.subtotalLeft}>total</p>
            <p className={styles.subtotalRight}>$ {total.toLocaleString("en-US")}</p>
          </div>
          <div className={styles.subtotal}>
            <p className={styles.subtotalLeft}>shipping</p>
            <p className={styles.subtotalRight}>$ {shippingCost}</p>
          </div>
          <div className={styles.subtotal}>
            <p className={styles.subtotalLeft}>vat (included)</p>
            <p className={styles.subtotalRight}>$ {Math.round(total * VAT)}</p>
          </div>
          <div className={styles.total}>
            <p className={styles.subtotalLeft}>grand total</p>
            <p className={styles.totalRight}>$ {(total + shippingCost).toLocaleString("en-US")}</p>
          </div>
          <button type="submit" className={`button buttonLight ${styles.button}`}>
            continue & pay
          </button>
        </div>
      </form>
      <Portal selector={"#Portal"}>
        {showModal && (
          <OrderSummary
            closeModal={() => {
              setShowModal(false);
            }}
          />
        )}
      </Portal>
    </>
  );
};

export default CheckoutDetails;
