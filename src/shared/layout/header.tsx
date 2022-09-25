import styles from './header.module.css'
import hamburger from '../../../public/assets/shared/tablet/icon-hamburger.svg';
import logo from '../../../public/assets/shared/desktop/logo.svg';
import cart from '../../../public/assets/shared/desktop/icon-cart.svg';

import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.hamburgerContainer}>
                <Image src={hamburger} alt='menu'/>
            </div>
            <div className={styles.logoContainer}>
                <Image src={logo} alt='menu'/>
            </div>
            <div className={styles.cartContainer}>
                <Image src={cart} alt='menu'/>
            </div>
        </header>
    )
}

export default Header;