import styles from './productTemplate.module.css'
import Image from 'next/image'


interface ProductTemplate {
    title: string;
    src: string;
    alt: string
}

const productTemplate: React.FC<ProductTemplate> = (props) => {
    return (
        <div>
            <div>
                <div className={styles.imageContainer}>
                    <Image src={props.src} alt={props.alt} />
                </div>
            </div>
        </div>
    )
}

export default productTemplate;