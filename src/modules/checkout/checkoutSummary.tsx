import styles from './checkoutSummary.module.css'
import Image from 'next/image';
import example from '../../../public/assets/cart/image-xx59-headphones.jpg'

const CheckoutSummary = () => {
    return (
        <div className={styles.summary}>
            <h2 className={styles.header}>summary</h2>
            <div className={styles.products}>
                <div className={styles.product}>
                    <div className={styles.imageContainer}>
                        <Image src={example} alt='example' />
                    </div>
                    <div>
                        <p>XX99 MK II</p>
                        <p>$ 2,999</p>
                    </div>
                    <div className={styles.qty}>
                        <p>x1</p>
                    </div>
                </div>
            </div>
            <div className={styles.subtotal}>
                <p className={styles.subtotalLeft}>total</p>
                <p className={styles.subtotalRight}>$ 5,396</p>
            </div>
            <div className={styles.subtotal}>
                <p className={styles.subtotalLeft}>shipping</p>
                <p className={styles.subtotalRight}>$ 50</p>
            </div>
            <div className={styles.subtotal}>
                <p className={styles.subtotalLeft}>vat (included)</p>
                <p className={styles.subtotalRight}>$ 1,079</p>
            </div>
            <div className={styles.subtotal}>
                <p className={styles.subtotalLeft}>grand total</p>
                <p className={styles.subtotalRight}>$ 5,446</p>
            </div>
        </div>
    )
}

export default CheckoutSummary;