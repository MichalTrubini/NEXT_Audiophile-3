import CheckoutSummary from '../src/modules/checkout/checkoutSummary';
import CheckoutUserInfo from '../src/modules/checkout/checkoutUserInfo';

const Checkout = () => {
    return (
        <div className="container checkoutBlocks">
            <CheckoutUserInfo />
            <CheckoutSummary />
        </div>
    )
}

export default Checkout;