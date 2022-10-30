import styles from './pageTitle.module.css'
import {ITitle} from '../../shared/types/types'

const PageTitle: React.FC<ITitle> = (props) => {
    return (
        <div className={styles.title}>
            <h1 className={styles.header}>{props.title}</h1>
        </div>
    )
}

export default PageTitle;