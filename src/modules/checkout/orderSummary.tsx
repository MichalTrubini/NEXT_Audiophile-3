import styles from "./orderSummary.module.css";
import checkmark from '../../../public/assets/checkout/icon-order-confirmation.svg';
import Image from 'next/image'
import Link from 'next/link'

interface IModal {
  closeModal(): any;
}

const OrderSummary: React.FC<IModal> = (props) => {
  return (
    <>
      <div className="overlay"></div>
      <div className={styles.summary}>
        <div className={styles.imageContainer}>
            <Image src={checkmark} alt='checkmark' />
        </div>
        <h2 className={styles.header}>thank you<br/> for your order</h2>
        <p className={styles.message}>You will receive an email confirmation shortly.</p>
        <div className={styles.table}>
            <div>

            </div>
            <div>
                <p>grand total</p>
                <p>$ 5,446</p>
            </div>
        </div>
        <Link href='/'><p className={`button buttonLight ${styles.button}`}>back to home</p></Link>
      </div>
    </>
  );
};

export default OrderSummary;
