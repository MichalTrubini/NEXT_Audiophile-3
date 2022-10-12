import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './input.module.css'

interface IInput {
    inputQty:number 
}

const InputItem:React.FC<IInput> = (props) => {

    const [inputQty, setInputQty] = useState(1);
    const router = useRouter();
    
    props.enteredQty(inputQty);

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
  
    //reseting the input default value when user clicks on new product, i.e. the URL path changes
    useEffect(() => {
      setInputQty(1);
    }, [router]);

    return (
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
    )
}

export default InputItem